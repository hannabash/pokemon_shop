import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom';

import PokemonDetailsLayout from '../components/PokemonDetailsLayout';
import {GET_DETAILS_REQUEST} from '../actions';
import useCart from "../../../Hooks/useCart";

const PokemonDetailsPageContainer = () => {
   const {id} = useParams();
   const dispatch = useDispatch();
   const { pokemonInfo, isLoading } = useSelector(
      (state) => state.pokemonDetailsPage
   );

   const [
      handleAddPokemonCart,
      handleIncrementCart,
      handleDecrementCart,
      handleDeletePokemon,
      itemsList,
   ] = useCart();

   const pokemon = {
      id: pokemonInfo.id,
      name: pokemonInfo.name,
      image: pokemonInfo.image,
      price: pokemonInfo.price
   }

   useEffect(() => {
      dispatch(GET_DETAILS_REQUEST(id))
   }, [dispatch])
   return <PokemonDetailsLayout 
   pokemonInfo={pokemonInfo} 
   isLoading={isLoading}
   cartItems={itemsList}
   handleAddPokemonCart={handleAddPokemonCart}
   pokemon={pokemon}
   />;
};

export default PokemonDetailsPageContainer;