import {Error} from './RootState';

export type AmountState = {
  offerData: any;
  fetchingGetOffer: boolean;
  errorGetOffer: Error | null;

  fetchingGetWeather: boolean;
  errorGetWeather: Error | null;
  weatherData: any;

  fetchingAddCategory: boolean;
  errorAddCategory: Error | null;
  addCategoryData: any;

  fetchingGetCategories: boolean;
  errorGetCategories: Error | null;
  categoriesData: any;
};

export type UserState = {
  userData: any;
  fetchingSignUp: boolean;
  errorSignUp: Error | null;

  categoriesData: any;
  fetchingGetCategories: boolean;
  errorGetCategories: Error | null;
};
