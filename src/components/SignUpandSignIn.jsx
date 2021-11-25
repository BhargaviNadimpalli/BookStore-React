import React from "react";
import Container from "./containerforlogin";

export default function SignInAndSignUp(){

    const listentoLoginSignup=function(data){
        console.log(data)
    }
    return(
         <div className="SignInSignup">
             <Container listentoLoginSignup={listentoLoginSignup} />
         </div>
    )

}