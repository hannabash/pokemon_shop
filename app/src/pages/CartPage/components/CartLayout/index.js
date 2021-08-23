import React from "react";
import PropTypes from "prop-types";
import {v4 as uuid} from 'uuid';
import { 
   Box, 
   Button, 
   TableContainer, 
   TableHead, 
   TableRow, 
   TableCell, 
   TableBody, 
   Table, 
   Paper, 
   Snackbar,
   withStyles } from "@material-ui/core";
import {Alert} from "@material-ui/lab";   

import SimpleBackdrop from "../../../../commonComponents/Backdrop/SimpleBackdrop";

import styles from './styles';

const CartLayout = ({
   isLoading,
   totalPrice,
   classes,
   itemsList,
   handlePokemonQuantityIncrement, 
   handlePokemonQuantityDecrement, 
   handlePokemonDelete, 
   handleAddOrder,
   handleClose,
   open,
   orderHeaders
}) => {
   return (
      <Box>
         <SimpleBackdrop
            open={isLoading}
         />
         <Box>
            <h1>CART OF ORDERS</h1>
         </Box>
         <Box>
            <TableContainer component={Paper}>
               <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                     <TableRow>
                        <TableCell>Pokemon name</TableCell>
                        {orderHeaders.map((header) => (
                           <TableCell key={uuid()} className={classes.header} align="right">{header}</TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                  {itemsList.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell component="th" scope="row">{item.name}</TableCell>
                        <TableCell className={classes.header} align="right"><img src={item.image}/></TableCell>
                        <TableCell className={classes.header} align="right">{item.price}</TableCell>
                        <TableCell align="right">
                           <Box className={classes.buttonWrapper}>
                              <Button onClick={() => handlePokemonQuantityDecrement(item)}>-</Button>
                              <Box className={classes.header}>{item.quantity}</Box>
                              <Button onClick={() => handlePokemonQuantityIncrement(item)}>+</Button>
                           </Box>
                        </TableCell>
                        <TableCell className={classes.header} align="right">{item.price * item.quantity}</TableCell>
                        <TableCell className={classes.header} align="right"><Button onClick={() => handlePokemonDelete(item.id)} className={classes.red}>DELETE</Button></TableCell>
                     </TableRow>
                  ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
         <Box>
            <h3>TOTAL PRICE: {totalPrice}</h3>
         </Box>
         <Box>
            <Button
               type='submit'
               variant='contained'
               color='primary'
               children='CONFIRM THE ORDER'
               onClick={() => handleAddOrder()}
               disabled={totalPrice === 0}
            />
         </Box>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            Your order has been successfully created!
            </Alert>
         </Snackbar>
      </Box>
   )
};

CartLayout.propTypes = {
   isLoading: PropTypes.bool.isRequired,
   totalPrice: PropTypes.number.isRequired,
   itemsList: PropTypes.arrayOf (
      PropTypes.shape({
         price: PropTypes.number,
         name: PropTypes.string,
         image: PropTypes.string,
         id: PropTypes.number,
         quantity: PropTypes.number,
      })
   ),
   handlePokemonQuantityIncrement: PropTypes.func.isRequired, 
   handlePokemonQuantityDecrement: PropTypes.func.isRequired, 
   handlePokemonDelete: PropTypes.func.isRequired, 
   handleAddOrder: PropTypes.func.isRequired,
   handleClose: PropTypes.func.isRequired,
   open: PropTypes.bool.isRequired,
   orderHeaders: PropTypes.array.isRequired
};

export default withStyles(styles)(CartLayout);