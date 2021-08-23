import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginPageLayout from '../components/LoginLayout';
import  useForm  from '../../../Hooks/useForm';
import {LOGIN_REQUEST} from '../actions';
import {ROUTES} from '../../../Routes/routeNames';

const LoginPageContainer = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const {isAuth, isLoading, errors} = useSelector((state) => state.auth)

   const [formValues, handleChange, handleReset] = useForm({
      email: '',
      password: '',
   })

   const handleSubmit = useCallback((event) => {
      event.preventDefault();
      dispatch(LOGIN_REQUEST(formValues))

   }, [dispatch, formValues])

   const handleClick = useCallback(() => {
      history.push(ROUTES.SIGNUP_PAGE)
   }, [dispatch])

   useEffect(() => {
      if (isAuth) {
         history.push(ROUTES.POKEMONS_PAGE)
      }
   }, [isAuth])

   return <LoginPageLayout
      loginData={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      errors={errors}
      handleClick={handleClick}
   />;
};

export default LoginPageContainer; 