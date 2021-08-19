import React from 'react';
import PropTypes from 'prop-types';
import { Box, withStyles } from "@material-ui/core";

import SimpleCard from '../../../../commonComponents/Card/SimpleCard';
import Pagination from '../../../../commonComponents/Pagination';
import SimpleBackdrop from '../../../../commonComponents/Backdrop/SimpleBackdrop';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

import styles from './styles';

const PokemonsPageLayout = ({
   pokemons,
   classes,
   handlePageChange,
   currentPage,
   isLoading,
   handleGoToPokemonDetails,
   handleAddPokemonCart,
   cartItems
}) => {
   return (
      <Box>
         <SimpleBackdrop open={isLoading}/>
      <Box className={classes.wrapper}>
         {pokemons.map((pokemon) => {
            const isPokemonInTheCart = cartItems.findIndex(item => item.id === pokemon.id) !== -1
            return (
               <Box key={pokemon.id}
            onClick={() => handleGoToPokemonDetails(pokemon.id)}
            >
               <SimpleCard 
               image={pokemon.image} 
               children={pokemon.name}
               price={`price: ${pokemon.price}`}
               isAddDisabled={isPokemonInTheCart}
               handleAddPokemonCart={(event) => {
                  event.stopPropagation();
                  handleAddPokemonCart(pokemon)}}
               handleGoToPokemonDetails={(event) => {
                  event.stopPropagation();
                  handleGoToPokemonDetails(pokemon.id)}}
               button1='Add to cart'
               button2='Go to product'
               ></SimpleCard>
               </Box>
            )
         })}
         <Box>
            <Pagination
            onPageChange={handlePageChange}
            pageCount={30}
            currentPage={currentPage}
            />
         </Box>
      </Box>
      </Box>
   )
};

PokemonsPageLayout.propTypes = {
   pokemons: PropTypes.arrayOf (
      PropTypes.shape({
         price: PropTypes.number,
         name: PropTypes.string,
         image: PropTypes.string,
         id: PropTypes.number,
      })
   ),
   currentPage: PropTypes.number,
   isLoading: PropTypes.bool,
};

export default withStyles(styles)(PokemonsPageLayout);