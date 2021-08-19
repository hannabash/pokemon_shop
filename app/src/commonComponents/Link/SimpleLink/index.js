import React from "react";
import PropTypes from "prop-types";

import { Link, withStyles } from "@material-ui/core";

import styles from './styles';

const SimpleLink = ({onClick, value}) => {
   return (
      <Link
      component="button"
      variant="body2"
      onClick={onClick}
      children={value}
      >
      </Link>
   )
};

SimpleLink.propTypes = {
   onClick: PropTypes.func.isRequired,
   value: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleLink);