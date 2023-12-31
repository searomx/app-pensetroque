/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <Firebase.h>
#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <RNGoogleSignin/RNGoogleSignin.h>

#import <FBSDKCoreKit/FBSDKCoreKit.h>

#import <react-native-splash-screen/RNSplashScreen.h>


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"pensetroqueapp"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [RNSplashScreen show];
  return YES;
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [[FBSDKApplicationDelegate sharedInstance] application:application openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]]
         || [RNGoogleSignin application:application openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];
}

// - (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {
//   return [RNGoogleSignin application:application
//                              openURL:url
//                    sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey]
//                           annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];
// }

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {

  return [RNGoogleSignin application:application
                             openURL:url
                   sourceApplication:sourceApplication
                          annotation:annotation
          ];
}



// - (BOOL)application:(UIApplication *)application 
//     didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  
//   // You can skip this line if you have the latest version of the SDK installed
//   [[FBSDKApplicationDelegate sharedInstance] application:application
//     didFinishLaunchingWithOptions:launchOptions];
//   // Add any custom logic here.
//   return YES;
// }

// - (BOOL)application:(UIApplication *)application 
//             openURL:(NSURL *)url 
//             options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {

//   BOOL handled = [[FBSDKApplicationDelegate sharedInstance] application:application
//     openURL:url
//     sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey]
//     annotation:options[UIApplicationOpenURLOptionsAnnotationKey]
//   ];
//   // Add any custom logic here.
//   return handled;
// }





- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
