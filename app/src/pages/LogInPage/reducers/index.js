import { handleActions } from "redux-actions";
import { LOCAL_STORAGE_KEY } from "../../../constants/localStorageKeys";

import * as actions from '../actions';

const defaultState = {
   isLoading: false,
   isAuth: false,
   userInfo: {},
   accessToken: null,
   errors: null,
};

const authReducer = handleActions(
   {
      [actions.LOGIN_REQUEST]: (state) => ({
         ...state,
         isLoading: true,
      }),
      [actions.LOGIN_SUCCESS]: (state, {payload}) => {
         const {accessToken, ...userInfo} = payload.response;

         localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, accessToken);

         return {
            isLoading: false,
            isAuth: true,
            userInfo,
         };
      },
      [actions.LOGIN_FAIL]: (state, {payload}) => ({
         isLoading: false,
         errors: payload.response,
      }),
   },
   defaultState
);

export default authReducer;