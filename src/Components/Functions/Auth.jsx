import axios from "axios";

let instance = axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
axios.defaults.withCredentials=true

//SignUp Step 1
export const _SignUpEmail = async(value)=> 
    await axios.post(instance+'/SignUpEmail',value);
//SignUp Step 2
export const _SignUp = async(value)=> 
     await axios.post(instance+'/SignUp',value);

export const _SignIn = async(value)=>
    await axios.post(instance+'/SignIn',value);

export const _CurrentUser = async(authtoken) => {
    return await axios.post(instance+'/CurrentUser',{},{
        headers : {
             authtoken, 
        }
    })
}

export const _CurrentAdmin = async(authtoken) => {
        return await axios.post(instance+'/CurrentAdmin',{},{
        headers : {
             authtoken, 
        }
    })
}

//Change Password Function Step 1
export const _ForgotPassword = async(value)=> 
    await axios.post(instance+'/ForgotPassword',value);
//Change Password Function Step 2
export const _ChangePassword = async(id,value)=> 
    await axios.put(instance+'/ChangePassword/'+id,value);

//Change Profile Function Step 1
export const _Profile = async(id,authtoken) =>{
    return await axios.get(instance+'/Profile/'+id,{
        headers : {
            authtoken,
       }
    })
}
//Change Profile Function Step 2
export const _ProfileUpdate = async(id,authtoken,value) => {
    console.log(value); return await axios.post(instance+'/ProfileUpdate/'+id,value,{
        headers : {
            authtoken,
        }
    })
}

//Change Email Function Step 1
export const _RequestChangeEmailOtp = async(value)=> 
    await axios.post(instance+'/RequestChangeEmailOtp',value);
//Change Email Function Step 2
export const _ChangeEmail = async(id,value)=> 
    await axios.put(instance+'/ChangeEmail/'+id,value);

//Change Phone Function Step 1
export const _RequestChangePhoneOtp = async(value)=> 
    await axios.post(instance+'/RequestChangePhoneOtp',value);
//Change Phone Function Step 2
export const _ChangePhone = async(id,value)=> 
    await axios.put(instance+'/ChangePhone/'+id,value);