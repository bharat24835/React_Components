import React from "react";
import './login.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useState , useEffect} from 'react';


const LoginSignUp = ()=>{

   
     
    // this useStation (action) is to change to color of submit button when we press Login ans SignUp Button
    const[action , setAction] = useState("Sign Up");
    // for login functionality , we need to hide Name input
    // for singup functinality , we need to hide Forgot PassWord Functinality


    return(
        <>
        <div className="container">
            <div className="header">
                <div className="text"> {action} </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {/* This INPUT is for Name */}
                {
                action === "Login" ? <></> :
                <div className="input">
                <img src = {user_icon} alt="" />
                <input type="text" placeholder="Name" />
                </div> 
            }
                {/* This Input is for Email  */}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                {/* This Input is for Password */}
                <div className="input">
                    <img src= {password_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {
                action === "Sign Up" ? <></> :
                 <div className="forgot-password">Lost Password ? <span>Click Here</span> </div>
            }

            <div className="submit-container">
                {/* <div className={action == "Login" ? "submit gray" : "submit"} onClick={()=>setAction("Login")}>Sign Up</div>
                <div className={action == "Sign Up" ? "submit gray" : "submit"} onClick={()=>setAction("Sign Up")} >Login</div> */}

                 <div className={action == "Login" ? "submit gray" : "submit"} onClick={()=>setAction("Login")}>
                    {
                        action === "Login" ? "Submit" : "Login"
                    }
                 </div>
                 <div className={action == "Sign Up" ? "submit gray" : "submit"} onClick={()=>setAction("Sign Up")}>
                 {
                        action === "Sign Up" ? "Submit" : "Sign Up"
                    }
                 </div>   
                 <div className= "submit" ><img src="https://img.icons8.com/?size=45&id=17949&format=png" alt="" /></div> 
               

            </div>

        </div>
        </>
    )
}
export default LoginSignUp
