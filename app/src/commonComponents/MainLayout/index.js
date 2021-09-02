import React from 'react';
import Header from '../Header/components/HeaderLayout';
import { useSelector } from "react-redux";

const MainLayout = ({children}) => {
   const {isAuth} = useSelector((state) => state.auth)
   return (
      <div>
         {isAuth && <Header/>}
         <div>
            {children}
         </div>
      </div> 
   )
};

export default MainLayout;