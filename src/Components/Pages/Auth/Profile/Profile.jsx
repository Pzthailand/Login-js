import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from "react";

//Function
import { _Profile , _ProfileUpdate } from "../../../Functions/Auth";
//CSS
import '../../../Style/Auth/Profile/Profile.css'


function Profile(){

    const Navigate = useNavigate();
  
    //Redux
    const selectUser = (state) => state.user;
    const  user  = useSelector(selectUser);

    const id = user.id
    const authtoken = user.token
    
    //console.log(id)
    //console.log(authtoken)

    const LoadData =()=>{
    _Profile(id,authtoken) //Function
        .then(res=>{
            setData(res.data)
            //console.log(res.data)
            setFname(res.data.fname)
            setLname(res.data.lname)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setAddres(res.data.addres)
            setZipcode(res.data.zipcode)
        }).catch(err=>{
            console.log(err)
        })
    }
    const [data , setData] = useState([]);
    useEffect(()=>{
        LoadData()
    },[id,authtoken])

    //Update Profile
        const [fname , setFname] = useState('');
        const [lname , setLname] = useState('');
        const [email , setEmail] = useState('');
        const [phone , setPhone] = useState('');
        const [addres , setAddres] = useState('');
        const [zipcode , setZipcode] = useState('');

        const ProfileUpdate =()=>{
            /*Validator*/
            const value = {
                fname,
                lname,
                addres,
                zipcode,
            }
            _ProfileUpdate(id,authtoken,value)
            .then(res=>{
                alert(res.data)
                LoadData();
            }).catch(err=>{
                alert(res.respone.data)
            })
        }
    console.log(fname,lname,email,phone,addres,zipcode)



    const ChangeEmail =()=>{
        console.log(email)
        Navigate('/VerifyChangeEmail')
    }

    const ChangePhone =()=>{
        console.log(phone)
        Navigate('/VerifyChangePhone')
    }


    return(
    <div>
        <div>
            <div>
                <div>
                    <div className="Profile-Title">Profile</div>
                    

                    <div className="Profile-container">
                        <div><label htmlFor="fname">First Name :</label></div>
                            <div><input type="text" 
                                name="fname" 
                                autoFocus 
                                placeholder="First Name" 
                                defaultValue={data.fname}
                                onChange={e => setFname(e.target.value)}
                                />
                            </div>

                            <div><label htmlFor="fname">Last Name :</label></div>
                            <div><input type="text" 
                                name="lname" 
                                autoFocus 
                                placeholder="Last Name" 
                                defaultValue={data.lname}
                                onChange={e => setLname(e.target.value)}
                                />
                            </div>

                            <div><label  htmlFor="addres">Address :</label></div>
                            <div><input style={{height:100}} type="text" 
                                name="addres" 
                                autoFocus 
                                placeholder="Example : 999/1 district province" 
                                defaultValue={data.addres}
                                onChange={e => setAddres(e.target.value)}
                                />
                            </div>

                            <div><label  htmlFor="zipcode">Zip code :</label></div>
                            <div><input type="text" 
                                name="zipcode" 
                                autoFocus 
                                placeholder="Zip Code" 
                                defaultValue={data.zipcode}
                                maxLength={6}
                                onChange={e => setZipcode(e.target.value)}
                                />
                            </div>

                            <div></div>
                            <div><button onClick={ProfileUpdate}>Change</button></div>
                            
                        </div>


                        <div className="Account-Title">Account</div>
                        
                        <div className="Account-container">
                        <div><label  htmlFor="email">Email :</label></div>
                            <div><input type="email" 
                                name="email"
                                defaultValue={data.email}
                                readOnly={true}
                                onChange={e => setEmail(e.target.value)}
                                />
                                <button onClick={ChangeEmail}>Change</button>
                            </div>
                            
                       
                            <div><label  htmlFor="phone">Phone Number :</label></div>
                            <div><input type="text" 
                                name="phone"  
                                defaultValue={data.phone}
                                readOnly={true}
                                onChange={e => setPhone(e.target.value)}
                                />
                                 <button onClick={ChangePhone}>Change</button>
                            </div>
                        </div>

                        
                    
                </div>
            </div>
        </div>
    </div>
    )
}
export default Profile