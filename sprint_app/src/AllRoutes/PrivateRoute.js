import React, { useContext } from 'react'
import { AuthContext } from '../ContextAPI/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const {isAuth} = useContext(AuthContext)
  
    if(!isAuth){
      return <Navigate to="/login" />
    }
    return children
  }
