import React,{ useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate,Link} from "react-router-dom";


//CSS
import '../../Style/User/Product.css'


function Products(){
    const Navigate = useNavigate();
  
    //Redux
    const Dispatch = useDispatch();
    const selectUser = (state) => state.user;
    const  user  = useSelector(selectUser);

    useEffect(()=>{

    },[])
    
    if (user !== null){
        //console.log(user.username)
        const userCurrent = (user.username)
        console.log(userCurrent)  
    } else {
        alert('Please Login')
        return null;
    }
    
    
    function Logout() {
            Dispatch({type:'LOGGED_OUT_USERS',
            Payload : null
        })
        Navigate('/')
        }

    return(
        <div>
            <div className="Product-Title">Products</div>
            <label><h4>Username : {user.username}</h4></label>
            <div><button onClick={Logout}>Sign Out</button></div>

            <h5><Link to="/UserPage">Back to Home Page</Link></h5>
        </div>
    )
}

export default Products