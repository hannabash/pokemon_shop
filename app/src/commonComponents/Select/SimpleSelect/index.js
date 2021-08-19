import React, {useState} from "react";
import PropTypes from "prop-types";

import { Select, InputLabel, MenuItem, FormControl, withStyles } from "@material-ui/core";

import styles from './styles';

const SimpleSelect = ({classes, name, label, handleChange, value}) => {

   return (
      <FormControl className={classes.formControl}>
         <InputLabel>Gender</InputLabel>
         <Select
            label={label}
            onChange={handleChange}
            name={name}
            value={value}
         >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
         </Select>
      </FormControl>
   )
};

SimpleSelect.propTypes = {
   value: PropTypes.string.isRequired,
   handleChange: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleSelect);