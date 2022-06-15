import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackType = {
  SignUpScreen: {type: string} | undefined;
  ChooseCategoriesScreen: {type: string} | undefined;
  HomeScreen: {type: string} | undefined;
  ConfirmScreen: {type: string} | undefined;
};

export type AppStackType = {
  Main: NavigatorScreenParams<MainStackType>;
};
