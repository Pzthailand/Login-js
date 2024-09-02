//import logo from '../../assets/Logo/Brand.svg'
import { NavLink , Link, useNavigate} from 'react-router-dom'
import React from 'react'

import { useDispatch,useSelector } from 'react-redux'
//CSS
import '../../Components/Style/Layouts/Header.css'

import { ProfileNavbar } from './ProfileNavbar'
export const Header =() =>{

  const selectUser = (state) => state.user; //Redux
  const  user  = useSelector(selectUser);


  const Dispatch = useDispatch(); //Redux
    function SignOut(){
    Dispatch({type:'LOGGED_OUT_USERS',
        Payload : null
        })
    }

    const username = 'PZ';
    const profileImageUrl = 'http://127.0.0.1:8081/api/UserImages/User1.png'; 
    //<ProfileNavbar username={username} profileImageUrl={profileImageUrl}/>

    return(
        <nav>
            <ul>
            {/*<li><NavLink end to= "/"><img src={logo} alt="logo" width={50} height={18} /></NavLink></li>*/}
            
            <li><NavLink end to= "/UserPage">Home</NavLink></li>
            <li><NavLink to= "/News">News</NavLink></li>
            <li><NavLink to= "/Products">Products</NavLink></li>
            <li><NavLink to= "/About">About</NavLink></li>
            <li><NavLink to= "/Contact">Contact</NavLink></li>
            
            {user && user.token ? (
                <div className='topnav-right dropdown'>
                        <div><li><NavLink to= "/Profile">{user.username}</NavLink></li></div>
                    <div className='dropdown-content'>
                        <div><li><Link to = "/Profile">Profile</Link></li></div>
                        <div><li><Link to = "/SignIn" onClick={SignOut}>Sign Out</Link></li></div>
                    </div>
                </div>
            ) : (
              <li className='topnav-right'><NavLink to= "/SignIn">Sign In</NavLink></li>
            )}
            <li className='topnav-right'><NavLink to= "/SignUpEmail">Sign Up</NavLink></li>
            </ul>
        </nav>
    )
}


