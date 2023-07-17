import {
  AUTH_SET_TOKEN,
  AUTH_REMOVE_TOKEN,
  SET_PASSWORD_RECOVERY_LOADING,
  SET_PASSWORD_RECOVERY_SUCCESS,
  SET_CREATE_ACCOUNT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  passwordRecovery: {
    isLoading: false,
    isSuccess: false
  },
  createAccount: {
    isLoading: false,
    isSuccess: false
  },
  token: null,
  expiryDate: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token,
        expiryDate: action.expiryDate
      };
    case AUTH_REMOVE_TOKEN:
      return {
        ...state,
        token: null,
        expiryDate: null
      };
    case SET_PASSWORD_RECOVERY_LOADING:
      return {
        ...state,
        passwordRecovery: {
          ...state.passwordRecovery,
          isLoading: action.isLoading
        }
      };
    case SET_PASSWORD_RECOVERY_SUCCESS:
      return {
        ...state,
        passwordRecovery: {
          ...state.passwordRecovery,
          isSuccess: action.isSuccess
        }
      };
    case SET_CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          isSuccess: action.isSuccess
        }
      };
    default:
      return state;
  }
};

export default reducer;
