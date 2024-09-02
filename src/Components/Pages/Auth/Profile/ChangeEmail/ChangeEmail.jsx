import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
//Function
import { _ChangeEmail } from '../../../../Functions/Auth';

import { useNavigate } from 'react-router-dom';

const ChangeEmail = () => {

    const [email,setEmail] = useState('');
    const [emailc,setEmailc] =useState('');

    const Navigate = useNavigate();

    //Redux
    const SelectUser = (state) => state.user
    const user = useSelector(SelectUser)
    const Dispatch = useDispatch();
    
    
    const [id , setId] = useState('');
    useEffect(()=>{
        setId(user.id)
    },[id])

    const ChangeEmail =()=> {
        if(email !== emailc){
            alert('Email Not Match')
        } else {
            const  value = {
                email
            }
            _ChangeEmail(id,value)
            .then(res=>{
                alert(res.data)
                Navigate('/Profile')
            }).catch(err=>{
                alert(err.response.data)
                //console.log(err)
            })
        }
    }
  return (
    <div>
        <h2>Change Email</h2>

                <div><label> Email : </label></div>
                <div><input type="email" 
                    name="email"
                    autoFocus 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                        
                <div><label> Confirm Email : </label></div>
                <div><input type="email" 
                    name="emailc" 
                    autoFocus 
                    placeholder="Confirm Email" 
                    onChange={e => setEmailc(e.target.value)}/></div>

                <div><button onClick={ChangeEmail}>Change Email</button></div>
    </div>
  )
}

export default ChangeEmail