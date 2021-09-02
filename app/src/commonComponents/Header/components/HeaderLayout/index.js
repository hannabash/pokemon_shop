import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, IconButton, Button, Badge, Box,  withStyles } from "@material-ui/core";
import { AccountCircle, AddShoppingCart, ExitToApp } from "@material-ui/icons";
import navItems from '../../config/navItems';

import styles from "./styles";

const HeaderLayout = ({
   classes, 
}) => {
   const { quantity } = useSelector((state) => state.cartPage);
   return (
      <Box>
      <AppBar position="static">
         <Toolbar>
            <Link className={classes.link} to={navItems[0].path} key={navItems[0].path}>
            <Button variant="contained" color='primary'>
            {navItems[0].title}
            </Button>
            </Link>
            <Box className={classes.grow} />
            <Box className={classes.sectionDesktop}>
               <Link className={classes.link} to={navItems[1].path} key={navItems[1].path}>
                  <IconButton color="inherit">
                     <Badge badgeContent={quantity} color="secondary">
                     <AddShoppingCart />
                     </Badge>
                  </IconButton>
               </Link>
               <Link className={classes.link} to={navItems[2].path} key={navItems[2].path}>
                  <IconButton
                  color="inherit"
                  >
                     <AccountCircle />
                  </IconButton>
               </Link>
               <IconButton
                  onClick={()=> {
                     localStorage.clear();
                     window.location.reload();
                  }}
                  color="inherit"
               >
                  <ExitToApp  />
               </IconButton>
            </Box>
         </Toolbar>
      </AppBar>
      </Box>
   )
};

export default withStyles(styles)(HeaderLayout);