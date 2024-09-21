import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
//Function
import { _ChangePassword } from '../../../Functions/Auth';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {

    

    const Navigate = useNavigate();

    const [password,setPassword] = useState('');
    const [passwordc,setPasswordc] =useState('');


    //Redux
    const SelectUser = (state) => state.user
    const user = useSelector(SelectUser)
    const Dispatch = useDispatch();
    
    
    const [id , setId] = useState('');
    useEffect(()=>{
        setId(user.id)
    },[id])

    const ChangePassword =()=> {
        if(password !== passwordc){
            alert('Password Not Match')
        } else {
            const  value = {
                password
            }
            _ChangePassword(id,value)
            .then(res=>{
                alert(res.data)
                Navigate('/SignIn')
                Dispatch({type:'FORGOT_PASSWORD',
                    ForgotPassword : null
                })
            }).catch(err=>{
                alert(err.response.data)
                //console.log(err)
            })
        }
    }
  return (
    <div>
        <h2 style={{marginBottom:25}}>Change Password</h2>

                <div><label> Password : </label></div>
                <div><input style={{width:300,height:15}}
                    type="password" 
                    name="password"
                    autoFocus 
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                        
                <div><label> Confirm Password : </label></div>
                <div><input style={{width:300,height:15}}
                    type="password" 
                    name="passwordc" 
                    autoFocus 
                    placeholder="Confirm Password" 
                    onChange={e => setPasswordc(e.target.value)}/></div>

                <div><button style={{height:40,width:200}} onClick={ChangePassword}>Change Password</button></div>
    </div>
  )
}

export default ChangePassword
