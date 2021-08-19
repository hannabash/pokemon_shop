import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {POKEMONS_REQUEST, CHANGE_PAGE} from '../actions'
import PokemonsPageLayout from '../components/PokemonsLayout';
import {ROUTES} from '../../../Routes/routeNames';
import useCart from '../../../Hooks/useCart';

const PokemonsPageContainer = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const {pokeList, currentPage, isLoading} = useSelector((state) => state.pokemonsPage)

   const [
      handleAddPokemonCart,
      handleIncrementCart,
      handleDecrementCart,
      handleDeletePokemon,
      itemsList,
   ] = useCart();

   

   const handleGoToPokemonDetails = useCallback((id) => {
      history.push(`${ROUTES.POKEMONS_PAGE}/${id}`)
   }, [history])

   useEffect(() => {
      dispatch(POKEMONS_REQUEST(currentPage))
   }, [dispatch, currentPage])

   const handlePageChange = useCallback((event, page) => {
      if (page !== currentPage) {
         dispatch(CHANGE_PAGE(page))
      }
   }, [currentPage])



   return <PokemonsPageLayout
   pokemons={pokeList}
   handlePageChange={handlePageChange}
   currentPage={currentPage}
   isLoading={isLoading}
   handleGoToPokemonDetails={handleGoToPokemonDetails}
   handleAddPokemonCart={handleAddPokemonCart}
   cartItems={itemsList}
   />
};

export default PokemonsPageContainer;