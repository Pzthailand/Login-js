import React,{useState} from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'; //npm install @emailjs/browser

//CSS
import '../../Style/User/Contact.css'
//assets
import Line from '../../../assets/Contact/Line.png'
import Instagram from '../../../assets/Contact/Instagram.png'
import Facebook from '../../../assets/Contact/Facebook.png'
import Phone from '../../../assets/Contact/Phone.png'
import Email from '../../../assets/Contact/Email.png'

function Contact(){

    return(
        <div>
                
                <div className="Contact-Title">Contact</div>

                <div className="Contact-container">
                    <img src={Line} />
                    <p>Pzthailand</p>
                </div>

                <div className="Contact-container" >
                    <img src={Instagram} />
                    <p>i.am.pz</p>
                </div>

                <div className="Contact-container" >
                    <img src={Facebook} />
                    <p>Papzi</p>
                </div>

                <div className="Contact-container" >
                    <img src={Phone} />
                    <p>094-557-5971</p>
                </div>

                <div className="Contact-container" >
                    <img src={Email} />
                    <p>Pzthailand@outlook.com</p>
                </div>
        
        </div>
    )
}
export default Contact