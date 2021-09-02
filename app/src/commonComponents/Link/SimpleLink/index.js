import React from "react";
import PropTypes from "prop-types";

import { Link, withStyles } from "@material-ui/core";

import styles from './styles';

const SimpleLink = ({onClick, children}) => {
   return (
      <Link
      component="button"
      variant="body2"
      onClick={onClick}
      >
         {children}
      </Link>
   )
};

SimpleLink.propTypes = {
   onClick: PropTypes.func.isRequired,
   children: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleLink);