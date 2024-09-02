import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProtectAdminRouteLoading from './ProtectAdminRouteLoading'

import { _CurrentAdmin } from '../Functions/Auth'

const ProtectAdminRoute = ({children}) => {
    const selectUser = (state) => state.user;
    const  user  = useSelector(selectUser);

    const [role , setRole] = useState(false)

    useEffect(()=>{
        if (user && user.token){
            _CurrentAdmin(user.token)
            .then(res=>{
                console.log(res)
                setRole(true)
            }).catch(err=>{
                console.log(err)
                setRole(false)
            })
        }
    },[user]);
    return role 
  ? children
  : <ProtectAdminRouteLoading/>
}

export default ProtectAdminRoute
