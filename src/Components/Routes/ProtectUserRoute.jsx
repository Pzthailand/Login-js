import React from 'react'
import { useSelector } from 'react-redux'
import ProtectUserRouteLoading from './ProtectUserRouteLoading';

const ProtectUserRoute = ({children}) => {

  const selectUser = (state) => state.user;
  const  user  = useSelector(selectUser);

  return user && user.token
  ? children
  : <ProtectUserRouteLoading/>
}

export default ProtectUserRoute
