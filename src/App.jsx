import React,{useState , useEffect} from 'react'
import { useDispatch } from 'react-redux';
//Function
import { _CurrentUser } from './Components/Functions/Auth';
//Router DomV6
import {useNavigate} from "react-router-dom"
//Layout
import { Header } from './Components/Layouts/Header'
import { Routed } from './Components/Layouts/Routed'
import { Footer } from './Components/Layouts/Footer'


function App() {

  const Navigate = useNavigate();
  //Redux
  const Dispatch = useDispatch();
  const tokenid = localStorage.getItem('token') //Get Token in Local App : localStorage
  //console.log(tokenid)
    useEffect(()=>{
    if(tokenid){
      _CurrentUser(tokenid)  
      .then(res => {
        //console.log('Response:', res.data);
        Dispatch ({type : 'LOGGED_IN_USERS',
                        Payload : {id: res.data._id,
                                   username: res.data.username,
                                   token: tokenid, //Localstorage
                                   role: res.data.role,
                                   email: res.data.email,
                                   phone: res.data.phone
                  }
        })
      })
      .catch(err => {
          console.error('Error:', err);
      });
    }
    },[])

  
  return (
    <div>
    <Header />
    <Routed />
    {/*<Footer />*/}
    </div>
  )
}

export default App
