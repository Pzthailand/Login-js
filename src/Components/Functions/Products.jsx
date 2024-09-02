import axios from "axios";

let instance = axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
axios.defaults.withCredentials=true


export const _ProductList = async()=> 
     await axios.get(instance+'/Product',{
})

export const _ProductRead = async(id)=> 
    await axios.get(instance+'/Product/'+id,{
})

export const _ProductCreate = async(value)=> 
    await axios.post(instance+'/Product',value);

export const _ProductUpdate = async(id , value)=> 
    await axios.put(instance+'/Product/'+id, value);

export const _ProductRemove = async(id)=> 
    await axios.delete(instance+'/Product/'+id );


