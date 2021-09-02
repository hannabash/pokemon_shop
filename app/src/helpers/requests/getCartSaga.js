import { put, takeEvery, select } from "redux-saga/effects";
import {GET_CART_REQUEST} from '../../pages/CartPage/actions';
import { LOGIN_SUCCESS } from "../../pages/LogInPage/actions";

export function* getCartWorker() {
  const isAuth = yield select((state) => state.auth);
  
  if (isAuth) {
    yield put(GET_CART_REQUEST())
  }
} 

export function* getCartWatcher() {
  yield takeEvery(LOGIN_SUCCESS, getCartWorker)
} 
