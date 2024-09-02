import { useState } from "react"
//DomV6
import { useNavigate , Link } from "react-router-dom";
//Function
import { _SignIn } from "../../Functions/Auth";
//Redux
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form"; //npm install react-hook-form
//CSS
import '../../Style/Auth/SignIn.css'

function SignIn (){
        const Navigate = useNavigate();
        const Dispatch = useDispatch();//Redux
        const [formData , SetFormData] = useState({
            username:'',
            password:'',
        });
        const [loading,setLoading] = useState(false); //Loading
        const {username , password } = formData;
        const onChange = (e) => {
            SetFormData({...formData,[e.target.name]: e.target.value})
        }
        const onSubmit = (e) => {
            setLoading(true)
            e.preventDefault();

            if(username,password === ''){
                alert('Please insert data...') 
                setLoading(false) //Loading
            }else{
             const value = {
                username,
                password
             }
             _SignIn(value) //Function
             .then(response => {
                 //console.log('Payload',response)
                 setLoading(false)
                 Dispatch({type:'LOGGED_IN_USERS',
                    Payload: {  id:response.data.payload.user.id,
                                username:response.data.payload.user.username,
                                token:response.data.token, 
                                role:response.data.payload.user.role,
                                email:response.data.payload.user.email,
                                phone:response.data.payload.user.phones
                    }
                 });
                 localStorage.setItem('token',response.data.token)
                 //console.log('role',response.data.payload.user.role)
                 const role = (response.data.payload.user.role)
                 roleBaseRedirect(role)
             }).catch(err => {
               setLoading(false)
               alert(err.response.data)
               //console.log(err.response.data)
               //Check Server Error
               console.error(err)
             });   
            }
        }
          //Roles Page Admin & Users
          const roleBaseRedirect = (role) => {
            if (role === 'admin'){
                Navigate('/AdminPage')
            }else{
                Navigate('/UserPage')
            }
        }

       

    return(
        <div>
            <div>
                <div>
               {!loading ? (<div className="SignIn-Title">Sign In .... </div>) : (<div className="SignIn-Title">Loading...</div>)}
               
                    <form onSubmit={e=> onSubmit(e)}>
                        <div className="SignIn-container">               
                            <div><label> Username : </label></div>
                                <div><input type="text" 
                                    name="username" 
                                    autoFocus
                                    placeholder="Username"
                                    maxLength={16}
                                    onChange={e => onChange(e)}/>
                                </div>

                            <div><label> Password : </label></div>
                                <div><input type="password" 
                                    name="password" 
                                    autoFocus 
                                    placeholder="Password" 
                                    onChange={e => onChange(e)}/>
                            </div>
                   
                            <div></div> 
                            <div><button >Sign In</button></div>

                            <div></div>
                            <div><Link to="/ForgotPassword">Forgot Password</Link></div>
                            <div></div><Link to="/SignUpEmail">Sign Up</Link><div></div>

                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
    }

    export default SignIn