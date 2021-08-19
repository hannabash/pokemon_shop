import React from "react";
import PropTypes from "prop-types";
import { Box, Snackbar, withStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";  

import SimpleInput from "../../../../commonComponents/Inputs/SimpleInput";
import SimpleButton from "../../../../commonComponents/Buttons/SimpleButton";
import SimpleBackdrop from "../../../../commonComponents/Backdrop/SimpleBackdrop";
import SimpleSelect from '../../../../commonComponents/Select/SimpleSelect';
import SimpleLink from "../../../../commonComponents/Link/SimpleLink";

import styles from './styles';

const SignupPageLayout = ({
   classes, 
   handleChange, 
   loginData,
   handleSubmit,
   isLoading,
   errors,
   handleClick,
   open, 
   handleClose
}) => {
   return (
      <Box>
         <form actions='' onSubmit={handleSubmit} className={classes.wrapper}>
            <Box className={classes.inputWrapper}>
               <h1>SIGN UP</h1>
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleInput
               value={loginData.email}
               name='email'
               type='email'
               handleChange={handleChange}
               label='Email'
               />
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleInput
               value={loginData.password}
               name='password'
               type='password'
               handleChange={handleChange}
               label='Password'
               />
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleInput
               gender={loginData.passwordConfirmation}
               name='passwordConfirmation'
               type='password'
               handleChange={handleChange}
               label='Confirm the password'
               />
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleInput
               value={loginData.firstName}
               name='firstName'
               type='text'
               handleChange={handleChange}
               label='First Name'
               />
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleInput
               value={loginData.lastName}
               name='lastName'
               type='text'
               handleChange={handleChange}
               label='Last Name'
               />
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleInput
               value={loginData.phone}
               name='phone'
               type='phone'
               handleChange={handleChange}
               label='Phone Number'
               />
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleSelect
               value={loginData.gender}
               name='gender'
               label='Gender'
               handleChange={handleChange}
               />
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleButton
                  type='submit'
                  variant='contained'
                  color='primary'
                  children='SIGN UP'
                  disabled={
                     (loginData.email
                     && loginData.password
                     && loginData.passwordConfirmation
                     && loginData.firstName
                     && loginData.lastName
                     && loginData.phone
                     && loginData.gender) === '' 
                  }
               >
               </SimpleButton>
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleLink 
               onClick={handleClick}
               value='Go to authorization'
               >
               </SimpleLink>
            </Box>
            {errors && <Box className={classes.errorMassage}>{errors}</Box>}
         </form>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            Your order has been successfully created!
            </Alert>
         </Snackbar>
         <SimpleBackdrop
            open={isLoading}
         />
      </Box>
   )
};

SignupPageLayout.propTypes = {
   loginData: PropTypes.objectOf(
      PropTypes.shape({
         email: PropTypes.string,
         password: PropTypes.string,
         passwordConfirmation: PropTypes.string,
         firstName: PropTypes.string,
         lastName: PropTypes.string,
         phone: PropTypes.string,
         gender: PropTypes.string,
      })
   ),
   isLoading: PropTypes.bool.isRequired,
};


export default withStyles(styles)(SignupPageLayout);