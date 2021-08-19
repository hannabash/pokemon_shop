import React from 'react';
import PropTypes from 'prop-types'
import { Box, withStyles, Button } from "@material-ui/core";

import SimpleBackdrop from "../../../../commonComponents/Backdrop/SimpleBackdrop";

import styles from './styles'

const PokemonDetailsLayout = ({
   pokemonInfo, 
   classes,
   isLoading,
   cartItems,
   handleAddPokemonCart,
   pokemon
}) => {
   return (
      <Box className={classes.box}>
         <SimpleBackdrop open={isLoading}/>
         <Box className={classes.wrapper}>
            <Box>
               <img className={classes.img} src={pokemonInfo.image}></img>
            </Box>
            <Box>
               <h1>Pokemon Name: {pokemonInfo.name}</h1>
               <h3>Price: {pokemonInfo.price}</h3>
               <Button
               variant='contained'
               color='primary'
               children='ADD TO CART'
               disabled={
                  cartItems
                  .findIndex(item => item.id === pokemonInfo.id) 
                  !== -1}
               onClick={() => handleAddPokemonCart(pokemon)}
               >
               </Button>
            </Box>
         </Box>
         <h2>ABILITIES</h2>
         <Box>
            {pokemonInfo.abilities?.map((ability) => (
               <Box key={ability.title}>
                  <h3>{ability.title}</h3>
                  <h5>{ability.description}</h5>
               </Box>
            ))}
         </Box>
         <h2>STATS</h2>
         <Box>
            {pokemonInfo.stats?.map((item) => (
               <Box key={item.title} className={classes.stats}>
                  <h3 className={classes.title}>{item.title}:</h3>
                  <h3>{item.value}</h3>
               </Box>
            ))}
         </Box>
      </Box>
   )
};

PokemonDetailsLayout.propTypes = {
   pokemonInfo: PropTypes.objectOf(
      PropTypes.shape({
         name: PropTypes.string,
         price: PropTypes.number,
         image: PropTypes.string,
         abilities: PropTypes.arrayOf(
            PropTypes.shape({
               title: PropTypes.string,
               description: PropTypes.string,
            })
         ),
         stats: PropTypes.arrayOf(
            PropTypes.shape({
               title: PropTypes.string,
               value: PropTypes.number,
            })
         )
      })
   )
};

export default withStyles(styles)(PokemonDetailsLayout);


