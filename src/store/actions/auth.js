import AsyncStorage from "@react-native-community/async-storage";

import {
  TRY_AUTH,
  AUTH_SET_TOKEN,
  AUTH_REMOVE_TOKEN,
  SET_PASSWORD_RECOVERY_LOADING,
  SET_PASSWORD_RECOVERY_SUCCESS,
  SET_CREATE_ACCOUNT_SUCCESS
} from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";
import { Actions } from "react-native-router-flux";

const API_KEY = "AIzaSyCToM_1ZBaflWvq6FdgmieGZNE4com6udU";

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading());
    let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + API_KEY;
    if (authMode === "signup") {
      url =
        // "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => {
        console.log(err);
        alert("Authentication failed, please try again!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(uiStopLoading());
        console.log(parsedRes);
        if (!parsedRes.idToken) {
          alert("Authentication failed, please try again!");
        } else {
          dispatch(authStoreToken(parsedRes.idToken, parsedRes.expiresIn, parsedRes.refreshToken));

          Actions.login();
        }
      });
  };
};

export const authStoreToken = (token, expiresIn, refreshToken) => {
  return dispatch => {
    const now = new Date();
    const expiryDate = now.getTime() + expiresIn * 1000;
    dispatch(authSetToken(token, expiryDate));
    AsyncStorage.setItem("ap:auth:token", token);
    AsyncStorage.setItem("ap:auth:expiryDate", expiryDate.toString());
    AsyncStorage.setItem("ap:auth:refreshToken", refreshToken);
  };
};

export const authSetToken = (token, expiryDate) => {
  return {
    type: AUTH_SET_TOKEN,
    token: token,
    expiryDate: expiryDate
  };
};

export const authGetToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const token = getState().auth.token;
      const expiryDate = getState().auth.expiryDate;
      if (!token || new Date(expiryDate) <= new Date()) {
        let fetchedToken;
        AsyncStorage.getItem("ap:auth:token")
          .catch(err => reject())
          .then(tokenFromStorage => {
            fetchedToken = tokenFromStorage;
            if (!tokenFromStorage) {
              reject();
              return;
            }
            return AsyncStorage.getItem("ap:auth:expiryDate");
          })
          .then(expiryDate => {
            const parsedExpiryDate = new Date(parseInt(expiryDate));
            const now = new Date();
            if (parsedExpiryDate > now) {
              dispatch(authSetToken(fetchedToken));
              resolve(fetchedToken);
            } else {
              reject();
            }
          })
          .catch(err => reject());
      } else {
        resolve(token);
      }
    });
    return promise
      .catch(err => {
        return AsyncStorage.getItem("ap:auth:refreshToken")
          .then(refreshToken => {
            return fetch("https://securetoken.googleapis.com/v1/token?key=" + API_KEY, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: "grant_type=refresh_token&refresh_token=" + refreshToken
            });
          })
          .then(res => res.json())
          .then(parsedRes => {
            if (parsedRes.id_token) {
              console.log("Refresh token worked!");
              dispatch(authStoreToken(parsedRes.id_token, parsedRes.expires_in, parsedRes.refresh_token));
              return parsedRes.id_token;
            } else {
              dispatch(authClearStorage());
            }
          });
      })
      .then(token => {
        if (!token) {
          throw new Error();
        } else {
          return token;
        }
      });
  };
};

export const authAutoSignIn = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        console.log("start main tabs!");
      })
      .catch(err => console.log("Failed to fetch token!"));
  };
};

export const authClearStorage = () => {
  return dispatch => {
    AsyncStorage.removeItem("ap:auth:token");
    AsyncStorage.removeItem("ap:auth:expiryDate");
    return AsyncStorage.removeItem("ap:auth:refreshToken");
  };
};

export const authLogout = () => {
  return dispatch => {
    dispatch(authClearStorage()).then(() => {
      console.log("AUTH LOGOUT!!!");
    });
    dispatch(authRemoveToken());
  };
};

export const authRemoveToken = () => {
  return {
    type: AUTH_REMOVE_TOKEN
  };
};

export const setPasswordRecoveryLoading = isLoading => {
  return {
    type: SET_PASSWORD_RECOVERY_LOADING,
    isLoading: isLoading
  };
};

export const setPasswordRecoverySuccess = isSuccess => {
  return {
    type: SET_PASSWORD_RECOVERY_SUCCESS,
    isSuccess: isSuccess
  };
};

export const setCreateAccountSuccess = isSuccess => {
  return {
    type: SET_CREATE_ACCOUNT_SUCCESS,
    isSuccess: isSuccess
  };
};

export const requestPasswordRecovery = () => {
  return dispatch => {
    dispatch(setPasswordRecoveryLoading(true));
    setTimeout(() => {
      dispatch(setPasswordRecoverySuccess(true));
    }, 2000);
  };
};

export const requestCreateAccount = () => {
  return dispatch => {

    setTimeout(() => {
      dispatch(setCreateAccountSuccess(true));
    }, 2000);
  };
};
