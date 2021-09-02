import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
   isLoading: false,
   isSignup: false,
   userInfo: {},
   errors: null,
};

const signupReducer = handleActions(
   {
      [actions.SIGNUP_REQUEST]: (state) => ({
         ...state,
         isLoading: true,
      }),
      [actions.SIGNUP_SUCCESS]: (state, {payload}) => {
         const {userInfo} = payload.response;

         return {
            isLoading: false,
            isSignup: true,
            userInfo,
         };
      },
      [actions.SIGNUP_FAIL]: (state, {payload}) => ({
         isLoading: false,
         errors: payload.response,
      }),
   },
   defaultState
);

export default signupReducer;