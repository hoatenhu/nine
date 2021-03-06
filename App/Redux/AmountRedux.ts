import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types
import {AmountState} from '../Types/AmountTypes';
import {Error} from '../Types/RootState';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  getOfferRequest: [''],
  getOfferSuccess: ['offerData'],
  getOfferFailure: ['errorGetOffer'],

  getWeatherRequest: ['position'],
  getWeatherSuccess: ['weatherData'],
  getWeatherFailure: ['errorGetWeather'],

  getCategoriesRequest: [''],
  getCategoriesSuccess: ['categoriesData'],
  getCategoriesFailure: ['errorGetCategories'],

  addCategoryRequest: ['addCategoryData'],
  addCategorySuccess: [''],
  addCategoryFailure: ['errorAddCategoryData'],
});

export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<AmountState> = Immutable({
  fetchingGetOffer: false,
  errorGetOffer: null,
  offerData: null,

  fetchingGetWeather: false,
  errorGetWeather: null,
  weatherData: null,

  fetchingGetCategories: false,
  errorGetCategories: null,
  categoriesData: null,

  fetchingAddCategory: false,
  errorAddCategory: null,
  addCategoryData: null,
});

/* ------------- Reducers ------------- */

// Get offer
export const getOfferRequest = (state = INITIAL_STATE) =>
  state.merge({fetchingGetOffer: true, errorGetOffer: null});

export const getOfferFailure = (
  state = INITIAL_STATE,
  {errorGetOffer}: {errorGetOffer: Error},
) => state.merge({fetchingGetOffer: false, errorGetOffer});

export const getOfferSuccess = (
  state = INITIAL_STATE,
  {offerData}: {offerData: any},
) => state.merge({fetchingGetOffer: false, offerData});

// Get offer
export const getWeatherRequest = (state = INITIAL_STATE) =>
  state.merge({fetchingGetWeather: true, errorGetWeather: null});

export const getWeatherFailure = (
  state = INITIAL_STATE,
  {errorGetWeather}: {errorGetWeather: any},
) => state.merge({fetchingGetWeather: false, errorGetWeather});

export const getWeatherSuccess = (
  state = INITIAL_STATE,
  {categoriesData}: {categoriesData: any},
) => state.merge({fetchingGetWeather: false, categoriesData});

// Get categories
export const getCategoriesRequest = (state = INITIAL_STATE) =>
  state.merge({fetchingGetCategories: true, errorGetCategories: null});

export const getCategoriesFailure = (
  state = INITIAL_STATE,
  {errorGetCategories}: {errorGetCategories: any},
) => state.merge({fetchingGetCategories: false, errorGetCategories});

export const getCategoriesSuccess = (
  state = INITIAL_STATE,
  {weatherData}: {weatherData: any},
) => state.merge({fetchingGetCategories: false, weatherData});

// Add category
export const addCategoryRequest = (state = INITIAL_STATE) =>
  state.merge({fetchingAddCategory: true, errorAddCategory: null});

export const addCategoryFailure = (
  state = INITIAL_STATE,
  {errorAddCategory}: {errorAddCategory: any},
) => state.merge({fetchingAddCategory: false, errorAddCategory});

export const addCategorySuccess = (
  state = INITIAL_STATE,
  {addCategoryData}: {addCategoryData: any},
) => state.merge({fetchingAddCategory: false, addCategoryData});

/* ------------- Hookup Reducers To Types ------------- */
export const AmountTypes = Types;
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_OFFER_REQUEST]: getOfferRequest,
  [Types.GET_OFFER_SUCCESS]: getOfferSuccess,
  [Types.GET_OFFER_FAILURE]: getOfferFailure,

  [Types.GET_WEATHER_REQUEST]: getWeatherRequest,
  [Types.GET_WEATHER_SUCCESS]: getWeatherSuccess,
  [Types.GET_WEATHER_FAILURE]: getWeatherFailure,

  [Types.GET_CATEGORIES_REQUEST]: getCategoriesRequest,
  [Types.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [Types.GET_CATEGORIES_FAILURE]: getCategoriesFailure,

  [Types.ADD_CATEGORY_REQUEST]: addCategoryRequest,
  [Types.ADD_CATEGORY_SUCCESS]: addCategoryFailure,
  [Types.ADD_CATEGORY_FAILURE]: addCategorySuccess,
});
