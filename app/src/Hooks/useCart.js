import { useCallback } from "react";
import {useDispatch, useSelector} from 'react-redux';


import {
   ADD_CART_REQUEST,
   CHANGE_CART_REQUEST, 
   DELETE_CART_REQUEST, 
   } from '../pages/CartPage/actions';

export default () => {
   const dispatch = useDispatch();
   const {itemsList} = useSelector((state) => state.cartPage)
   
   const handleAddPokemonCart = useCallback((pokemon) => {
         const pokemonToAdd = {...pokemon, quantity: 1}
         dispatch(ADD_CART_REQUEST(pokemonToAdd))
   }, [dispatch, itemsList]);

   const handleIncrementCart = useCallback((pokemon) => {
      const quantityIncrement = {id: pokemon.id, quantity: pokemon.quantity +1}
      dispatch(CHANGE_CART_REQUEST(quantityIncrement));
   }, [dispatch]);

   const handleDecrementCart = useCallback((pokemon) => {
      if (pokemon.quantity !==0) {
         const quantityDecrement = {
            id: pokemon.id,
            quantity: pokemon.quantity - 1,
         };
         dispatch(CHANGE_CART_REQUEST(quantityDecrement));
      }
      
   }, [dispatch]);

   const handleDeletePokemon = useCallback((pokemon) => {
      dispatch(DELETE_CART_REQUEST(pokemon))
   }, [dispatch]);


   return [handleAddPokemonCart, 
      handleIncrementCart, 
      handleDecrementCart, 
      handleDeletePokemon,
      itemsList
   ];
};