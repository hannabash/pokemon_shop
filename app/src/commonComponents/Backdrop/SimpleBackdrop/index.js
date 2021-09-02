import React from "react";
import PropTypes from "prop-types";

import {Backdrop, withStyles, CircularProgress} from '@material-ui/core';

import styles from './styles';

const SimpleBackdrop = ({open, classes}) => {
   return (
      <Backdrop className={classes.backdrop} open={open}>
         <CircularProgress color='inherit' />
      </Backdrop>
   );
};

SimpleBackdrop.propTypes = {
   open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SimpleBackdrop);