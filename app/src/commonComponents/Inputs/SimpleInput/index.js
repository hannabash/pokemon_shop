import React from 'react';
import PropTypes from 'prop-types';

import {TextField, withStyles} from '@material-ui/core';

import styles from './styles';

const SimpleInput = ({value, label, handleChange, classes, type, name}) => {
   return (
      <TextField
         className={classes.input}
         label={label}
         value={value}
         onChange={handleChange}
         type={type}
         name={name}
      />
   );
};

SimpleInput.propTypes = {
   value: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   handleChange: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleInput);