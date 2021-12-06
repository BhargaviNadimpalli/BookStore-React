import React from "react";
import BookImage from '../assets/bookimage.png'
import '../css/BookDescription.css'
import { useHistory } from "react-router";
import Header from "./header";
import Footer from "./footer";
import { Addtocart, addtowishlist } from "../services/Bookservices";
export default function Bookdescription(props){
    
    const addtocartpage = function(){
        let obj = {
        BookId: props.singlebook.BookId,
        UserId: parseInt(localStorage.getItem("userId"))
        }
        Addtocart(obj).then(function(response){
            console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    const AddToWishlist = function(){
        let obj = {
            BookId: props.singlebook.BookId,
            UserId: parseInt(localStorage.getItem("userId"))
            }
            addtowishlist(obj).then(function(response){
                console.log(response.data)
            })
            .catch(function(error){
                console.log(error)
            })
    }
    return(
        <div className = "descriptionpage" >
            <Header/>
        <p className="paths">
             <button className = "gotohome"> Home / </button><span id="pathtobook">Book</span>
             </p>

        <div className="imagebox">
        <img src={BookImage} alt="Image" className = "booklogo" />
         </div>
        <div className="tagbuttons">
           
        <button id="addtobag" onClick = {addtocartpage}>ADD TO BAG</button> 
       
       <button id="wishlist" onClick = {AddToWishlist}>❤ WISHLIST</button> 
       
        </div>
        <div className = "description">
             <div className="detailsofbook">
          <p id="booktitle">{props.singlebook.bookName}</p>
            <p id ="authorbook">{props.singlebook.authorName}</p>
          <div className="ratingbox">
                <span>{props.singlebook.rating}★</span>
            </div>
             <span className="countreviewbook">({props.singlebook.bookCount})</span>
             <span className="bookprice">Rs. {props.singlebook.price}</span> 
             <span className="originalprice">Rs. {props.singlebook.originalPrice}</span>
             <hr className="borderline"></hr>

         <div className="descriptionofbookdetails">
        <ul id="caption"><li>Book Detail</li></ul>
         <p id="Bookparagraph">{props.singlebook.bookDescription}</p>
         <hr className="borderline"></hr> 
        </div>

        {/* <div className="feedback">
        <div className="feedback-title">
            <p>Customer Feedback</p>
        </div>

        <div className="rating-pad">
        <div className="overallrating">
        <p> Overall rating</p>

           <div id="stars">☆ ☆ ☆ ☆ ☆ </div>
        </div>

        <div className="writereview">
            Write your review
        </div>

        <div className="submitbutton">Submit</div>

        </div> */}
         <Footer/>
        </div>

        </div>

        </div>

    )
}