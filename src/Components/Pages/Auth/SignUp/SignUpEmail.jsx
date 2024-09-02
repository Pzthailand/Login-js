import React,{useState} from 'react'
//Function
import { _SignUpEmail } from '../../../Functions/Auth';
//Redux
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUpEmail = () => {

  const [email,setEmail] = useState('');
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  const CheckEmail=()=>{
    const value = {
      email
    }
    _SignUpEmail(value)
    .then(res=>{
          Dispatch({type:'SIGNUP_USERS',
          SignUp : {
            email:(res.data.user.email),
            otp:(res.data.user.otp)
          }
        })
          Navigate('/VerifySignUpEmail')
    }).catch(err=>{
      alert(err.response.data)
    })
  }


  
  return (
    <div >
          <div><label style={{fontSize:15 , fontWeight:600}}>Email</label></div>
          <div><input type='text' 
                name='email' 
                placeholder='Pzthailand@outlook.com'
                onChange={e=> setEmail(e.target.value)}
                />
              </div>
          <div style={{float:'right'}}><button onClick={CheckEmail}>Next</button></div>
    </div>
  )
}

export default SignUpEmail
