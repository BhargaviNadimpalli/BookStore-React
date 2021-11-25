import { TextField } from "@mui/material";
import React from "react";
import '../css/ResetPassword.css'
import { forgotpassword } from "../services/UserService";
import BookLogo from '../assets/booklogo.png'
import { useHistory } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function ForgotPassword(){
    const[email, setEmail] = React.useState("")
    const takeEmail = function(event){
        setEmail(event.target.value)
      }
    const Submit = function(){
        let statusEmail
        if(!emailRegex.test(email))
        {
          console.log("true")
          statusEmail = false
        }
        else
        {
          console.log("false")
          statusEmail = true
        }
        if (statusEmail == true)
        {
            let obj = {
            Email: email                                                   
        }
         console.log(obj)
         forgotpassword(obj).then(function(response){
         console.log(response)
         })
         .catch(function(error){
         console.log(error)
         })
      }
    }


    return(
        <div className="forgotpassword">           
           <div className="header"> 
           <img src={BookLogo} alt="" class="booklogo"/> 
           <p className="bookstoreheader">BookStore</p>
            </div>
            <div>
            <h3 className = "passwordmessage">Forget Your Password?</h3>
            </div>
            <br/>
            <div className="box">
            <div className="form-field">
            <span className="forgot">Enter your email address and we'll send you a link to reset your password.</span>
            <div className = "formemail">
                      <label className = "forgotemaillabel" htmlFor = "exampleemail">Email Id</label> <br/>
                      <input variant = "outlined" label = "email" 
                          placeholder = "email" type = "text" className = "forgotemail" onChange = {takeEmail}/>
                    
            </div>
            <div>
            <button onClick = {Submit} className="button">Reset Password</button>
            </div>
            <div class="createacount">
            <div class="createacountbtn">
                <button className="buttontwo"><h2>Create Account</h2></button>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default ForgotPassword