import {call, put, takeEvery} from 'redux-saga/effects';
import {isEmpty} from 'lodash';

import apiCallsMapping from '../../api/apiCallsMapping';
import createActionWithPostfix from './actionPostfixCreator';
import {POSTFIXES} from '../../constants/actionPostfixes';

const {REQUEST_POSTFIX, SUCCESS_POSTFIX, FAIL_POSTFIX} = POSTFIXES;

function* sendRequest(action) {
   try{
      const callMethod = apiCallsMapping(action);
      const response = yield call(callMethod, action.payload);

      const NEW_SUCCESS_ACTION = createActionWithPostfix(
         action, 
         {
            response: !isEmpty(response) ? response.data : {},
         },
         SUCCESS_POSTFIX
      );

      yield put(NEW_SUCCESS_ACTION);
   } catch (error) {
      console.log(error)
      yield put(
         createActionWithPostfix(
            action,
            {
               response: !isEmpty(error.response) ? error.response.data.message : '',
            },
            FAIL_POSTFIX   
         )
      );
   }
}

const isApiCallAction = (action) => {
   return action.type.endsWith(REQUEST_POSTFIX);
};

function* apiCallsSaga() {
   yield takeEvery(isApiCallAction, sendRequest);
}

export default apiCallsSaga;