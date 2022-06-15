import { Error } from './RootState'


export type AmoutState = {
  offerData: any
  fetchingGetOffer: boolean
  errorGetOffer: Error | null

  fetchingGetWeather: boolean,
  errorGetWeather: Error | null,
  weatherData: any
}

export type UserState = {
  userData: any
  fetchingSignUp: boolean,
  errorSignUp: Error | null,

  categoriesData: any,
  fetchingGetCategories: boolean,
  errorGetCategories: Error | null,
}
