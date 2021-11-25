import React, { Component } from "react";
import '../css/login.css'
import cartimage from '../assets/cartlogo.png'
import { signIn } from "../services/UserService";
import { useHistory } from "react-router-dom";
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
function Login(props) {
    let history = useHistory()
    const [email, setEmail] = React.useState("")
     const [password, setPassword] = React.useState("")
 

     const takeEmail = function(event)
     {
        setEmail(event.target.value)
     }
     const takePassword = function(event)
     {
         setPassword(event.target.value)
     }
const submit = function()
{
    let statusEmail 
    if(emailRegex.test(email))
    {      
     console.log("false")
     statusEmail = true
    }
    else
    {
      console.log("true")
      statusEmail = false
    }
    let statusPassword 
    if(passwordRegex.test(password))
    {      
     console.log("false")
     statusPassword = true
    }
    else
    {
      console.log("true")
      statusPassword = false
    }
    if(statusEmail == true && statusPassword == true)
    {
         let obj = {
              Email: email,
              Password: password
         }
    
    console.log(obj) 
    signIn(obj).then(function(response){
        console.log(response)
       let tokenArray = response.data.result._Id
       localStorage.setItem("userId", tokenArray)
       localStorage.setItem("Token", response.data.result.accessToken)
       if(response.status==200){
       history.push("/Home")
     }
    })
    .catch(function(error){
      console.log(error)  
    })
}
}
  const gotoforgotpassword = function(){
    history.push("/forgotpassword")
  }
    const click=function(){
        props.listentosignup(true)
    }
        return(
            <div className = "loginpage">
                <div className="leftlogo">
                    <img src={cartimage} alt="cartimage" class="image"/>  
                    <p>Online Book Shopping</p>
                </div>
                <div className = "signin">
                    <div className = "buttons">
                <div className="div">
                    Login
                    <button class="tab-btn" ></button>
                </div>
                <div className="div">
                    SignUp
                    <button class="tab-btn" onClick = {click} ></button>
                </div>
            </div>
              
              <div className = "adminbody">
                  <div className = "formemail">
                      <label className = "emaillabel" htmlFor = "exampleemail">Email Id</label> <br/>
                      <input variant = "outlined" label = "email" 
                          placeholder = "email" type = "text" className = "email" onChange = {takeEmail}/>
                    
                  </div>
                  <div className = "formpassword">
                  <label className = "passwordlabel" htmlFor = "exampleemail">Password</label>
                <input variant = "outlined" type = "Password" 
                  label = "password" placeholder = "password" type = "text"
                  className = "password" onChange = {takePassword}/>
                  </div>
                  <button className = "passwordbutton" onClick = {gotoforgotpassword}>Forgot Password?</button>
                  <button type = "button" onClick = {submit} className = "loginbutton">Login</button>
                  <div className="or">
                    <h5>-------------OR--------------</h5>
                </div>
                <div className = "account">
                <button type="button" class="Facebook btn-primary">
                    Facebook
                </button>
                <button type="button" class="Google btn-outline-secondary">
                    Google
                </button>
                </div>
              </div>
            </div>
            </div>
        )
    }
export default Login