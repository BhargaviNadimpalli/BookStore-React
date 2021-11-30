import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInAndSignUp from "../components/SignUpandSignIn";
import SignUp from "../components/signup";
import ForgotPassword from "../components/ResetPasword";
import DashBoard from '../components/DashBoard'
import Bookdescription from "../components/BookDescription";
function Router(){
    return(
        <BrowserRouter>
             <Switch>
                  <Route path = "/" exact component = {SignInAndSignUp}/>
                  <Route path = "/signup" component = {SignUp}/>
                  <Route path = "/forgotpassword" component = {ForgotPassword}/>
                  <Route path = "/Home" component = {DashBoard} />
                  <Route path = "/Description" component = {Bookdescription} />
             </Switch>
        </BrowserRouter>
    )
}
export default Router