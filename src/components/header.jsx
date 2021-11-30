import React from "react";
import BookLogo from '../assets/booklogo.png'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Button } from "@material-ui/core";
import { Icon, InputBase } from "@mui/material";
import Toolbar from "@material-ui/core/Toolbar";
import '../css/Header.css'
import Profile from '../assets/profilelogo.jpg'
import Cartlogo from '../assets/supermarket.svg'
function Header(){
    return(
        <div className = "header">

        <Toolbar className = "toolbar">
         <div className = "headermenu">
                <img src={BookLogo} alt="booklogo" class="headerbooklogo"/>
                <p className="bookstoreheader">BookStore</p>
         </div>
         <div className = "search">
              <div className = "searchicon">
                  <IconButton><SearchIcon/></IconButton>
              </div>
              <div className = "text">
                   <InputBase placeholder = "Search...." name = "value"/>
               </div>
         </div>
         <div>
             <img src = {Profile} alt = "profile" className = "profilelogo" />
             <p className = "profile">Profile</p>
             <img src = {Cartlogo} alt = "cart" className = "cartlogo" />
             <p className = "cart">Cart</p>
         </div>
         </Toolbar>
         </div>

    )
}
export default Header