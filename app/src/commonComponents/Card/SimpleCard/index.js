import React from "react";
import PropTypes from "prop-types";

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const SimpleCard = ({
   image, 
   children, 
   classes, 
   price, 
   button1, 
   button2, 
   handleGoToPokemonDetails,
   handleAddPokemonCart,
   isAddDisabled
}) => {
   return (
      <Card className={classes.card}>
      <CardActionArea>
         <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title="Contemplative Reptile"
         />
         <CardContent>
            <Typography gutterBottom variant="h5" children={children} component="h2"/>
            <Typography variant="body2" color="textSecondary" children={price} component="h1"/>
         </CardContent>
      </CardActionArea>
      <CardActions>
         <Button disabled={isAddDisabled} onClick={handleAddPokemonCart}  className={classes.button} children={button1} color="primary">
         </Button>
         <Button onClick={handleGoToPokemonDetails} className={classes.button} children={button2} color="primary">
         </Button>
      </CardActions>
      </Card>
   )
};

SimpleCard.propTypes = {
   image: PropTypes.string.isRequired,
   children: PropTypes.string.isRequired,
   price: PropTypes.string.isRequired,
   button1: PropTypes.string.isRequired,
   button2: PropTypes.string.isRequired,
   handleAddPokemonCart: PropTypes.func.isRequired,
   handleGoToPokemonDetails: PropTypes.func.isRequired,
   isAddDisabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SimpleCard);