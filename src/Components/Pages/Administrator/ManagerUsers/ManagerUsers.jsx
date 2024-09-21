import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { useState,useEffect } from "react";

import { Switch , Select ,Tag } from 'antd'; //npm install antd
//CSS
import '../../../Style/Administrator/ManagerUser/ManagerUser.css'

//Function
import { _ListUsers,_ChangeStatus,_ChangeRole } from "../../../Functions/ManagerUser"

function ManagerUsers(){

    const Navigate = useNavigate();
  
    //Redux
    const selectUser = (state) => state.user;
    const  user  = useSelector(selectUser);
    //const {user} = useSelector((state)=>({...state}))
    
    const authtoken = user.token
    //console.log(authtoken)

        const LoadData = () =>{
            _ListUsers(authtoken)
            .then(res =>{
                setData(res.data);
                //console.log(res.data)
            }).catch(err=>{
                console.log('err',err)
            })
        }

        useEffect(()=> {
            LoadData();
        },[])

        //Receive LoadData
        const [data , setData] = useState([]);

        //Check Status User
        const Status =(e,id)=>{
            console.log(e,id)
            const value = {
                id:id,
                enabled:e // Input e or true , false
            }
            _ChangeStatus(authtoken,value)
            .then(res=>{
                console.log(res)
                LoadData()
            }).catch(err=>{
                console.log(err)
            })
        }

        const Roledata = ['admin','user'] 
        const Role =(e,id)=>{
            const value = {
                id:id,
                role:e
            }
            _ChangeRole(authtoken,value)
            .then(res=>{
                console.log(res)
                LoadData()
            }).catch(err=>{
                console.log(err)
            })
        }

    return(
        <div>
            <h2>Manager Users</h2>
            <div className="UserManager-container">
                    <div className="UserManager-item">No</div>
                    <div className="UserManager-item">Identification</div>
                    <div className="UserManager-item">Username</div>
                    <div className="UserManager-item">Role</div>
                    <div className="UserManager-item">Status</div>
                    <div className="UserManager-item">Firstname</div>
                    <div className="UserManager-item">Lastname</div>
                    <div className="UserManager-item">Email</div>
                    <div className="UserManager-item">Phone</div>
                    <div className="UserManager-item">Address</div>
                    <div className="UserManager-item">Zip</div>
                </div>
        {data.map((item,index) => (
            <div key ={index}>
                <div className="UserManager-container">
                    <div className="UserManager-item">{index+1}</div>
                    <div className="UserManager-item">{item._id}</div>
                    <div className="UserManager-item">{item.username}</div>
                    <div className="UserManager-item">
                        <Select style={{width:100}} onChange={(e)=>Role(e,item._id)} size="small" defaultValue={item.role}>
                            {Roledata.map((item,index)=>
                                <Select.Option value={item} key={index}>
                                    {item == 'admin'
                                    ? <Tag color="red">{item}</Tag> 
                                    : <Tag color="blue">{item}</Tag> 
                                    }
                                </Select.Option>
                            )}
                        </Select></div>
                    <div
                        className="UserManager-item"><Switch size="small" checked={item.enabled} onChange={(e)=>Status(e,item._id)}/>
                    </div>
                    <div className="UserManager-item">{item.fname}</div>
                    <div className="UserManager-item">{item.lname}</div>
                    <div className="UserManager-item">{item.email}</div>
                    <div className="UserManager-item">{item.phone}</div>
                    <div className="UserManager-item">{item.addres}</div>
                    <div className="UserManager-item">{item.zipcode}</div>
                </div>
            </div >))}

            <h5><Link to="/Adminitratordashboard">Back to Manager Page</Link></h5>
    </div>
    )
}
export default ManagerUsers