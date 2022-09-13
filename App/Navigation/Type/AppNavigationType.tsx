import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackType = {
  SignUpScreen: {type: string} | undefined;
  CategoryScreen: {type: string} | undefined;
  HomeScreen: {type: string} | undefined;
  ConfirmScreen: {type: string} | undefined;
  Auth: NavigatorScreenParams<AuthStackType>;
};

export type AuthStackType = {
  SignUpScreen: {type: string} | undefined;
  SignInScreen: {type: string} | undefined;
  VerifyScreen: {type: string} | undefined;
};

export type AppStackType = {
  Main: NavigatorScreenParams<MainStackType>;
};
