import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectAdminRouteLoading = () => {
    const [count , setCount] = useState(3)
    const Navigate = useNavigate();
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },1000)
        //Redirect
        count === 0 && Navigate('/SignIn')

        return ()=> clearInterval(interval)
    },[count]);

  return (
    <div>
      <h5>Administrator access denied , Redirect in {count}</h5>
    </div>
  )
}

export default ProtectAdminRouteLoading
