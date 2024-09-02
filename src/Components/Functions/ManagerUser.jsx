import axios from "axios";

let instance = axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
axios.defaults.withCredentials=true


export const _ListUsers = async(authtoken) => {
    return await axios.get(instance+'/ListUsers',{
        headers : {
             authtoken,
        }
    })
}

export const _ChangeStatus = async(authtoken,value) => {
    return await axios.post(instance+'/ChangeStatus',value,{
        headers : {
             authtoken,
        }
    })
}

export const _ChangeRole = async(authtoken,value) => {
    return await axios.post(instance+'/ChangeRole',value,{
        headers : {
             authtoken,
        }
    })
}
