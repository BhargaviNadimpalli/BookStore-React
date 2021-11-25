import React from "react";
import SignUp from "./signup";
import Login from "./login";

function Container(props){
    const [clickfirstnote, setclickfirstnote]=React.useState(false)
    const listentosignup = function(data){
        if(data==true){
            setclickfirstnote(true)
        }
        else if(data==false)
        {
            props.listentoLoginSignup(false)
            setclickfirstnote(false)
        }
    }
    return(
        <div className="signupLoginPage">
            {                   
            clickfirstnote ? <SignUp listentosignup={listentosignup}/> : <Login listentosignup={listentosignup} /> 
            }        
        </div>
    )
}
export default Container