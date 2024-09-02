import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
//Function
import { _ChangePhone } from '../../../../Functions/Auth';

import { Navigate, useNavigate } from 'react-router-dom';

const ChangePhone = () => {

    const [phone, setPhone] = useState('');
  
    const Navigate = useNavigate();

    //Redux
    const SelectUser = (state) => state.user
    const user = useSelector(SelectUser)
    const Dispatch = useDispatch();
    
    
    const [id , setId] = useState('');
    useEffect(()=>{
        setId(user.id)
    },[id])

    const ChangePhone =()=> {
            const  value = {
                phone
            }
            _ChangePhone(id,value)
            .then(res=>{
                alert(res.data)
                Navigate('/Profile')
            }).catch(err=>{
                alert(err.response.data)
                //console.log(err)
            })
    }
  return (
    <div>
        <h2>Change Phone</h2>

                <div><label> Phone Number : </label></div>
                <div><input type="text" 
                    name="phone"
                    autoFocus 
                    placeholder="0-9" 
                    onChange={e => setPhone(e.target.value)}/>
                </div>
                        
                <div><button onClick={ChangePhone}>Change Phone Number</button></div>
    </div>
  )
}

export default ChangePhone