import React from "react";
import '../css/shoppinglogo.css'
import logo from '../assets/shoopinglogo.png'
function OnlineLogo(){
    return(
        <div className = "mainlogo">
            <img src = {logo} alt= "logo" className = "logo"/>
            <p>online book shopping </p>
        </div>
    )
}
export default OnlineLogo