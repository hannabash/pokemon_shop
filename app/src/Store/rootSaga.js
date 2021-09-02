import 'regenerator-runtime/runtime';
import {all} from 'redux-saga/effects';

import apiCallsSaga from '../helpers/requests/watchRequest';
import { getCartWorker, getCartWatcher } from "../helpers/requests/getCartSaga";

function* rootSaga() {
   yield all([apiCallsSaga(), getCartWorker(), getCartWatcher()]);
}

export default rootSaga;