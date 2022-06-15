import { put, call, takeLatest } from 'redux-saga/effects'

// Api
import UserApi from '../Services/UserApi'

// Redux
import UserActions, { UserTypes } from '../Redux/UserRedux'

// Config
import { AsyncStoreKey } from '../Config/AppConfig'

// Functions
import {
  setNetworkActivityStatusBar,
  getErrorAPI
} from '../Functions/ApiFunctions'
import {
  setAsyncStorage
} from '../Functions/AsyncStorageFunction'

const userApi = UserApi.create()

export function* signUpSaga(action: any): any {
  try {
    const { authData } = action
    setNetworkActivityStatusBar(true)
    const response = yield call(userApi.signUp, authData)
    setNetworkActivityStatusBar()
    if (response.ok && response.status === 200) {
      yield put(UserActions.signUpSuccess(response.data))
      setAsyncStorage(AsyncStoreKey.ACCESS_TOKEN, response.data.token)
      setAsyncStorage(AsyncStoreKey.REFRESH_TOKEN, response.data.refreshToken)
    } else {
      yield put(UserActions.signUpFailure(getErrorAPI(response)))
    }
  } catch (error: any) {
    yield put(UserActions.signUpFailure(getErrorAPI(error.message)))
  }
}

export function* getCategoriesSaga(): any {
  try {
    setNetworkActivityStatusBar(true)
    const response = yield call(userApi.getCategories)
    setNetworkActivityStatusBar()
    if (response.ok && response.status === 200) {
      yield put(UserActions.getCategoriesSuccess(response.data))
    } else {
      yield put(UserActions.getCategoriesFailure(getErrorAPI(response)))
    }
  } catch (error: any) {
    yield put(UserActions.getCategoriesFailure(getErrorAPI(error.message)))
  }
}


export default function* UserSaga() {
  yield takeLatest(UserTypes.GET_CATEGORIES_REQUEST, getCategoriesSaga)
  yield takeLatest(UserTypes.SIGN_UP_REQUEST, signUpSaga)
}
