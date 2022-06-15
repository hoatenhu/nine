import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types
import {UserState} from '../Types/AmountTypes';
import {Error} from '../Types/RootState';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  signUpRequest: ['authData'],
  signUpSuccess: ['userData'],
  signUpFailure: ['errorSignUp'],

  getCategoriesRequest: [''],
  getCategoriesSuccess: ['categoriesData'],
  getCategoriesFailure: ['errorGetCategories'],
});

export default Creators;
export const UserTypes = Types;

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<UserState> = Immutable({
  userData: null,
  fetchingSignUp: false,
  errorSignUp: null,

  categoriesData: null,
  fetchingGetCategories: false,
  errorGetCategories: null,
});

/* ------------- Reducers ------------- */

// Confirm Loan
export const signUpRequest = (state = INITIAL_STATE) =>
  state.merge({
    fetchingSignUp: true,
    errorSignUp: null,
  });

export const signUpSuccess = (
  state = INITIAL_STATE,
  {userData}: {userData: any},
) =>
  state.merge({
    userData,
    fetchingSignUp: false,
    errorSignUp: null,
  });

export const signUpFailure = (
  state = INITIAL_STATE,
  {errorSignUp}: {errorSignUp: Error},
) =>
  state.merge({
    fetchingSignUp: false,
    errorSignUp,
  });

// Get provinces
export const getCategoriesRequest = (state = INITIAL_STATE) =>
  state.merge({
    fetchingGetCategories: true,
    errorGetCategories: null,
  });

export const getCategoriesSuccess = (
  state = INITIAL_STATE,
  {categoriesData}: {categoriesData: any},
) =>
  state.merge({
    categoriesData,
    fetchingGetCategories: false,
    errorGetCategories: null,
  });

export const getCategoriesFailure = (
  state = INITIAL_STATE,
  {errorGetCategories}: {errorGetCategories: Error},
) =>
  state.merge({
    fetchingGetCategories: false,
    errorGetCategories,
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,

  [Types.GET_CATEGORIES_REQUEST]: getCategoriesRequest,
  [Types.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [Types.GET_CATEGORIES_FAILURE]: getCategoriesFailure,
});
