import React from 'react';
import PropTypes from 'prop-types';
import {Box, withStyles} from '@material-ui/core';

import SimpleInput from '../../../../commonComponents/Inputs/SimpleInput';
import SimpleButton from '../../../../commonComponents/Buttons/SimpleButton';
import SimpleBackdrop from '../../../../commonComponents/Backdrop/SimpleBackdrop';
import SimpleLink from '../../../../commonComponents/Link/SimpleLink';

import styles from './styles';

const LoginPageLayout = ({
   classes, 
   handleChange, 
   loginData,
   handleSubmit,
   isLoading,
   errors,
   handleClick,
}) => {
   return(
      <Box>
         <form actions='' onSubmit={handleSubmit} className={classes.wrapper}>
            <Box className={classes.inputWrapper}>
               <h1>LOGIN</h1>
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
               <SimpleButton
                  type='submit'
                  variant='contained'
                  color='primary'
                  children='LOGIN'
                  disabled={(loginData.email && loginData.password) === ''}
               >
               </SimpleButton>
            </Box>
            <Box className={classes.inputWrapper}>
               <SimpleLink 
               onClick={handleClick}
               children='Go to registration'
               />
            </Box>
            {errors && <div className={classes.errorMassage}>{errors}</div>}
         </form>
         <SimpleBackdrop
            open={isLoading}
         />
      </Box>
   );
};

LoginPageLayout.propTypes = {
   loginData: PropTypes.object.isRequired,
   isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginPageLayout);