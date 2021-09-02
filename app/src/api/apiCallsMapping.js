import * as loginActions from '../pages/LogInPage/actions';
import * as loginAPI from '../pages/LogInPage/api';

import * as pokemonsActions from '../pages/PokemonsPage/actions';
import * as pokemonsAPI from '../pages/PokemonsPage/api';

import * as signupActions from '../pages/SignUpPage/actions';
import * as signupAPI from '../pages/SignUpPage/api';

import * as detailsActions from '../pages/PokemonDetailsPage/actions';
import * as detailsAPI from '../pages/PokemonDetailsPage/api';

import * as cartActions from '../pages/CartPage/actions';
import * as cartAPI from '../pages/CartPage/api';

import * as userActions from '../pages/UserPage/actions';
import * as userAPI from '../pages/UserPage/api';

const apiCallsMapping = (action) => {
   const mapping = {
      [loginActions.LOGIN_REQUEST]: loginAPI.signIn,
      [pokemonsActions.POKEMONS_REQUEST]: pokemonsAPI.getPokemons,
      [signupActions.SIGNUP_REQUEST]: signupAPI.signup,
      [detailsActions.GET_DETAILS_REQUEST]: detailsAPI.getDetails,
      [cartActions.GET_CART_REQUEST]: cartAPI.getCart,
      [cartActions.ADD_ITEM_TO_CART_REQUEST]: cartAPI.addToCart,
      [cartActions.CHANGE_CART_REQUEST]: cartAPI.changeCart,
      [cartActions.DELETE_FROM_CART_REQUEST]: cartAPI.deleteFromCart,
      [userActions.GET_ORDER_REQUEST]: userAPI.getUserOrder,
      [userActions.ADD_ORDER_REQUEST]: userAPI.addUserOrder,
   };

   if (!mapping[action.type]) {
      throw Error('Not mapped action');
   }

   return mapping[action.type];
};

export default apiCallsMapping;