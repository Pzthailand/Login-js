import React,{useEffect, useState} from 'react'
//Function
import { _ForgotPassword } from '../../../Functions/Auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//CSS
import '../../../Style/Auth/ForgotPassword/ForgotPassword.css'

const ForgotPassword = () => {
        const [username , setUsername] = useState('');
        const [email , setEmail] = useState('');

        const Dispatch = useDispatch();
        const Navigate = useNavigate();

        const RequestPassword =()=> {
              const value = {
                username,
                email
            }
            //console.log(value)
            _ForgotPassword(value)
            .then(res=>{
              Dispatch({type:'FORGOT_PASSWORD',
                ForgotPassword : {
                  id:(res.data.user.id),
                  otp:(res.data.user.otp)
                }
              })
                Navigate('/VerifyForgotPasswordEmail')
            }).catch(err=>{
              console.log(err.response.data)
              alert(err.response.data)
            })
        }
  return (
    <div>
        <h2 style={{marginBottom:25}}>Forgot Password</h2>
                    <div><label> Username </label></div>
                    <div><input style={{width:300,height:15}}  
                                type="text" 
                                name="username" 
                                autoFocus 
                                placeholder="Username" 
                                onChange={e => setUsername(e.target.value)}/>
                        </div>
                        
                    <div><label> Email </label></div>
                    <div><input style={{width:300,height:15}} 
                                type="text" 
                                name="email" 
                                autoFocus 
                                placeholder="Email" 
                                onChange={e => setEmail(e.target.value)}/>
                        </div>

                    <button style={{height:40,width:200}} onClick={RequestPassword}>Request new password</button>

    </div>
  )
}

export default ForgotPassword
