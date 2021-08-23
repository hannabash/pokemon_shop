import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import SignupPageLayout from '../components/SignupLayout';
import useForm from "../../../Hooks/useForm";
import {SIGNUP_REQUEST} from '../actions';
import { ROUTES } from "../../../Routes/routeNames";

const SignupPageContainer = () => {
   const dispatch = useDispatch();
   const history = useHistory();

   const { isLoading, errors, isSignup } = useSelector((state) => state.signup);

   const [formValues, handleChange, handleReset] = useForm({
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
      phone: '',
      gender: '',
   })

   const handleSubmit = useCallback((event) => {
      event.preventDefault();
      const newUser = {
         email: formValues.email,
         password: formValues.password,
         firstName: formValues.firstName,
         lastName: formValues.lastName,
         phone: formValues.phone,
         gender: formValues.gender,
      }
      if (formValues.password === formValues.passwordConfirmation) {
         dispatch(SIGNUP_REQUEST(newUser));
      } 
   }, [dispatch, formValues])

   const handleClick = useCallback(() => {
      history.push(ROUTES.LOGIN_PAGE)
      setOpen(true);
   }, [dispatch])

   useEffect(() => {
      if (isSignup) {
         history.push(ROUTES.LOGIN_PAGE)
      }
   }, [isSignup])

   const [open, setOpen] = useState(false);

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
      return;
      }

      setOpen(false);
   };

   const disableButton =(
         formValues.email &&
         formValues.password &&
         formValues.passwordConfirmation &&
         formValues.firstName &&
         formValues.lastName &&
         formValues.phone &&
         formValues.gender) === ""; 

   return <SignupPageLayout
   loginData={formValues}
   handleChange={handleChange}
   handleSubmit={handleSubmit}
   isLoading={isLoading}
   errors={errors}
   handleClick={handleClick}
   open={open}
   handleClose={handleClose}
   disableButton={disableButton}
   />
};

export default SignupPageContainer;