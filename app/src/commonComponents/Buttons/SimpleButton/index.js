import React from "react";
import PropTypes from "prop-types";

import {Button, withStyles} from '@material-ui/core';

import styles from './styles';

const SimpleButton = ({
   variant, 
   type, 
   disabled, 
   color, 
   children
}) => {
   return (
      <Button
         variant={variant}
         type={type}
         color={color}
         children={children}
         disabled={disabled}
      />
   );
};

SimpleButton.propTypes = {
   type: PropTypes.string.isRequired,
   variant: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   children: PropTypes.string.isRequired,
   disabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SimpleButton);