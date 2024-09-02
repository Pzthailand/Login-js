import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ProtectRouteSignInLoading from './ProtectRouteSignInLoading';

const ProtectRouteSignIn = ({children}) => {
    const selectUser = (state) => state.user;
    const  user  = useSelector(selectUser);
    const Navigate = useNavigate();
  
    return (!user)
    ? children
    : <ProtectRouteSignInLoading/>
}

export default ProtectRouteSignIn
