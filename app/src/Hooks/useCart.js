import { useCallback } from "react";
import {useDispatch, useSelector} from 'react-redux';


import {
   ADD_ITEM_TO_CART_REQUEST,
   CHANGE_CART_REQUEST, 
   DELETE_FROM_CART_REQUEST, 
   } from '../pages/CartPage/actions';

export default () => {
   const dispatch = useDispatch();
   const {itemsList} = useSelector((state) => state.cartPage)
   
   const handleAddPokemonCart = useCallback((pokemon) => {
         const pokemonToAdd = {...pokemon, quantity: 1}
         dispatch(ADD_ITEM_TO_CART_REQUEST(pokemonToAdd));
   }, [dispatch]);

   const handlePokemonQuantityIncrement = useCallback((pokemon) => {
      const pokemonToUpdate = {id: pokemon.id, quantity: pokemon.quantity +1}
      dispatch(CHANGE_CART_REQUEST(pokemonToUpdate));
   }, [dispatch]);

   const handlePokemonQuantityDecrement = useCallback((pokemon) => {
      if (pokemon.quantity !==0) {
         const pokemonToUpdate = {
            id: pokemon.id,
            quantity: pokemon.quantity - 1,
         };
         dispatch(CHANGE_CART_REQUEST(pokemonToUpdate));
      }
      
   }, [dispatch]);

   const handlePokemonDelete = useCallback((pokemon) => {
      dispatch(DELETE_FROM_CART_REQUEST(pokemon))
   }, [dispatch]);


   return [
      handleAddPokemonCart, 
      handlePokemonQuantityIncrement, 
      handlePokemonQuantityDecrement, 
      handlePokemonDelete,
      itemsList
   ];
};