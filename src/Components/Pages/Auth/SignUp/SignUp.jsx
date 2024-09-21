import { useState } from "react";
import { _SignUp } from "../../../Functions/Auth"; //Function
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

//CSS
import '../../../Style/Auth/SignUp/SignUp.css'

function SignUp (){
    
    //Redux
    const SelectUser = (state) => state.user
    const user = useSelector(SelectUser)
    const Dispatch = useDispatch();


    //Check null data
    if (user === null){
        return null;
    }


    const Navigate = useNavigate();
    
    const [formData , setFormData] = useState({
        username:'',
        password:'',
        passwordc:'',
        fname:'',
        lname:'',
        phone:'',
        addres:'',
        zipcode:''
    });
    //Loading
    const [Loading,setLoading] = useState(false);
    const {username , password , passwordc, fname, lname ,phone, addres , zipcode} = formData;
    const onChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }
    
    const email = user.email //Redux

    const onSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        
        if(password !== passwordc){
            alert('Password Not Match')
        } else {
            const value = {
                username,
                password,
                fname,
                lname,
                email,
                phone,
                addres,
                zipcode
            }
        //console.log(value)
        _SignUp(value)//Function
        .then(res=>{
            alert(res.data)
            setLoading(false)
            //Redux
            Dispatch({type:'SIGNUP_USERS',
                SignUp : null
            })
            Navigate('/SignIn')//Sign Up Success - Navigate To SignIn
        }).catch(err=>{
        alert(err.response.data)//Response.data in axios
        setLoading(false)
        })
    }
}
//console.log(username,password,passwordc,email)  
return(
    <div>
        <div>
            <div>
               {!Loading ? (<h2 >Sign Up</h2>) : (<h2 >Loading...</h2>)}
                   <form onSubmit={e=> onSubmit(e)}>

                    <div className="SignUp-container">
                        <div><label> Username : </label></div>
                        <div><input type="text" 
                            name="username" 
                            autoFocus 
                            placeholder="Username" 
                            onChange={e => onChange(e)}/>
                        </div>
                        

                        <div><label> Password : </label></div>
                        <div><input type="password" 
                            name="password" 
                            autoFocus 
                            placeholder="Password" 
                            onChange={e => onChange(e)}/>
                        </div>
                        

                        <div><label> Confirm Password : </label></div>
                        <div><input type="password" 
                            name="passwordc" 
                            autoFocus 
                            placeholder="Confirm Password" 
                            onChange={e => onChange(e)}/>
                        </div>
                        

                        <div><label> First Name : </label></div>
                        <div><input type="text" 
                            name="fname" 
                            autoFocus 
                            placeholder="First Name" 
                            onChange={e => onChange(e)}/>
                        </div>
                        

                        <div><label> Last Name : </label></div>
                        <div><input type="text" 
                            name="lname" 
                            autoFocus 
                            placeholder="Last Name" 
                            onChange={e => onChange(e)}/>
                        </div>
                        

                        <div><label> Phone Number : </label></div>
                        <div><input 
                            type="phone" 
                            name="phone" 
                            autoFocus 
                            placeholder="099-999-9999" 
                            onChange={e => onChange(e)}/>
                        </div>
                        

                        <div><label> Adress : </label> </div>
                        <div><input style={{height:100,textAlign:'left'}} 
                            type="text" 
                            name="addres" 
                            autoFocus 
                            placeholder="Example : 999/1 district province" 
                            onChange={e => onChange(e)}/>
                        </div>
                       

                        <div><label> Zip Code : </label></div>
                        <div><input type="text" 
                            name="zipcode" 
                            autoFocus 
                            placeholder="Zip Code" 
                            onChange={e => onChange(e)}/>
                        </div>

                        <div></div> {/*Fix Grid*/}

                        <div><button style={{height:40,width:200}}>Create Account</button></div>
                    </div>

                    </form>
            </div>
        </div>
    </div>
)
}

export default SignUp