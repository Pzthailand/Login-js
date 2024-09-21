import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {  useDispatch,useSelector } from 'react-redux';

const VerifySignUpEmail = () => {
  
    const [inputotp , setInputotp] = useState('');
    const [minutes , setMinutes] = useState(4);
    const [seconds , setSeconds] = useState(59);
   

    const Navigate = useNavigate();


    useEffect(()=>{
        const interval = setInterval(()=>{
          if(seconds > 0 ){
            setSeconds(seconds - 1)
          }
          if(seconds === 0){
            if(minutes === 0 ){
              clearInterval(interval)
            }else{
              setSeconds(60)
              setMinutes(minutes -1);
            }
          }
        },1000)
        return()=>{
          clearInterval(interval);
        };
    },[seconds])

    const Resendotp=()=>{
        setMinutes(4)
        setSeconds(59)
        //Send Username & Email Req New OTP
    }

    //Redux
    const SelectUser = (state) => state.user
    const user = useSelector(SelectUser)
    const Dispatch = useDispatch();


    //Check null data
    if (user === null){
      return null;
    }

    const otp = user.otp
    
    const Sendotp =()=>{
      if(inputotp === null){
        alert('Please Input OTP')
      }
      if(inputotp === otp){
        Dispatch({type:'SIGNUP_USERS',
          SignUp : {
            email : user.email
          }
        })
        Navigate('/SignUp')
      } else{
        alert('Invalid OTP')
      }
    }
  return (
    <div>  
      <div>
        <h2 style={{marginBottom:25}}>Verify OTP</h2>
        <input style={{textAlign:'center',height:30, width:200}}
          name='inputotp'
          placeholder='0-9'
          maxLength={6}
          onChange={e=> setInputotp(e.target.value)}/>
      </div>
        
      <div>
      <label style={{float:'left'}}>Time Remaining : {""}
        <span style={{fontWeight:600}}>
            {minutes <10 ?`0${minutes}` : minutes}: 
            {seconds <10 ?`0${seconds}` : seconds}
        </span>
      </label>

      <label disabled={seconds > 0 || minutes > 0 }
          style={{float:'right',color:seconds > 0 || minutes > 0 ? "#85888b" : "#FF5630" }} onClick={Resendotp}>Resend OTP</label>
      </div>

      <div>
          <button disabled={seconds === 0 }
          style={{color:seconds > 0 || minutes > 0 ? "#000000" : "#85888b" }} onClick={Sendotp}>Send</button>
      </div>

    </div>
  )
}

export default VerifySignUpEmail
