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
    if (email == ''){
      alert('Please input your email')
    }else{
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
  }


  
  return (
    <div >
          <h2 style={{marginBottom:25}}>Email</h2>
          <div><input style={{width:300,height:15}}
                type='text' 
                name='email' 
                placeholder='Pzthailand@outlook.com'
                onChange={e=> setEmail(e.target.value)}
                />
              </div>
          <div style={{float:'right'}}><button style={{width:100,height:40}} onClick={CheckEmail}>Next</button></div>
    </div>
  )
}

export default SignUpEmail
