import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { 
   Card, 
   CardContent, 
   Typography,
   Box, 
   TableContainer, 
   TableHead, 
   TableRow, 
   TableCell, 
   TableBody, 
   Table, 
   Paper, 
   withStyles } from "@material-ui/core";

import SimpleBackdrop from "../../../../commonComponents/Backdrop/SimpleBackdrop";

import styles from './styles';

const UserLayout = ({
   isLoading, 
   userInfo, 
   classes,
   ordersList
}) => {
   return(
      <Box>
         <SimpleBackdrop open={isLoading}/>
         <Box>
            <h1>PERSONAL ACCOUNT</h1>
            <Box>
               <Card>
                  <CardContent>
                     <Typography color="textSecondary" gutterBottom>
                     Personal data
                     </Typography>
                     <Typography variant="h5" component="h2">
                     {`${userInfo.firstName} ${userInfo.lastName}`}
                     </Typography>
                     <Typography color="textSecondary">
                     {`Email: ${userInfo.email}`}
                     </Typography>
                     <Typography variant="body2" component="p">
                     {`Telephone: ${userInfo.phone}`}
                     <br />
                     {`Gender: ${userInfo.gender}`}
                     </Typography>
                  </CardContent>
               </Card>
            </Box>
            {ordersList?.map((order) => (
               <Box key={order._id}>
            <TableContainer component={Paper}>
               <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                     <TableRow>
                        <TableCell>Pokemon name</TableCell>
                        <TableCell className={classes.header} align="right">Image</TableCell>
                        <TableCell className={classes.header} align="right">Price</TableCell>
                        <TableCell className={classes.header} align="right">Quantity</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                  {order.itemsList?.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell component="th" scope="row">{item.name}</TableCell>
                        <TableCell className={classes.header} align="right"><img src={item.image}/></TableCell>
                        <TableCell className={classes.header} align="right">{item.price}</TableCell>
                        <TableCell className={classes.header} align="right">{item.quantity}</TableCell>
                     </TableRow>
                  ))}
                  </TableBody>
               </Table>
            </TableContainer>
            <Box>
               <h3>TOTAL PRICE: {order.totalPrice}</h3>
            </Box>
            <Box>
               <h3>DATA: <Moment>{order.createdAt}</Moment></h3>
            </Box>
         </Box>
            ))}
         </Box>
      </Box>
   )
};

UserLayout.propTypes = {
   isLoading: PropTypes.bool.isRequired, 
   userInfo: PropTypes.object.isRequired, 
   ordersList: PropTypes.arrayOf (
      PropTypes.shape({
         totalPrice: PropTypes.number,
         customerId: PropTypes.string,
         createdAt: PropTypes.string,
         id: PropTypes.number,
         itemsList: PropTypes.arrayOf (
            PropTypes.shape({
               price: PropTypes.number,
               name: PropTypes.string,
               image: PropTypes.string,
               id: PropTypes.number,
               quantity: PropTypes.number,
            })
         )
      })
   )
};

export default withStyles(styles)(UserLayout);