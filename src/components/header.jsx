import React from "react";
import BookLogo from '../assets/booklogo.png'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Button } from "@material-ui/core";
import { Icon, InputBase } from "@mui/material";
import Toolbar from "@material-ui/core/Toolbar";
import '../css/Header.css'
import { useHistory } from "react-router";
import Profile from '../assets/profilelogo.jpg'
import Cartlogo from '../assets/supermarket.svg'
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Portal from '@mui/material/Portal';
import profilelogo from '../assets/profilelogone.png'
import Heart from '../assets/heartlogo.png'
import Myorder from '../assets/myorderlogo.png'
function Header(){
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };
 
    
    let history = useHistory()
    const gotocart = function(){
        history.push("/Cart")
    }
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
                <ClickAwayListener onClickAway={handleClickAway}>
            <div>
            <img src = {Profile} alt = "profile" className = "mainprofilelogo"  onClick={handleClick}/>
            <p className = "profile">Bhargavi</p>
                {open ? (
                <Portal>
                    <Box className = "profilebox">
                        <div>
                          <p className = "bhargavi">Hello Bhargavi,</p>
                          <img src = {profilelogo} alt = "profile" className = "profilelogo"/>
                          <p className = "profilenames">Profile</p>
                          <img src = {Myorder} alt = "profile" className = "profilelogoone"/>
                          <p className = "profilenameone">My Orders</p>
                          <img src = {Heart} alt = "profile" className = "profilelogotwo"/>
                          <p className = "profilenametwo">Wishlist</p>
                          <div className = "loginsignupbutton">
                              <p className = "profilelogout">Logout</p>
                          </div>
                    </div>
                    </Box>
                </Portal>
                ) : null}
            </div>
            </ClickAwayListener>
             {/* <img src = {Profile} alt = "profile" className = "profilelogo" /> */}
             
             <img src = {Cartlogo} alt = "cart" onClick = {gotocart} className = "cartlogo" />
             <p className = "cart" >Cart</p>
         </div>
         </Toolbar>
         </div>

    )
}
export default Header