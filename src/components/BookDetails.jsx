import React from "react";
import Star from '../assets/starlogo.jpg'
import BookImage from '../assets/bookimage.png'
import '../css/BookDetails.css'
import { useHistory } from "react-router";
function Bookdetails(props){
    const sendbook = function () {
        props.handlesetSingleBook(props.book);
        console.log(props.book);
      };
    return(
        <div className = "bookdisplay" 
            onClick={() => {
                sendbook();
                props.showsinglebook();
            }}>
        <div class="card-header">
            <img className="BookImg" src={BookImage} alt="BookImage" id = {props.book.bookId}/>
            </div>
        <div class="card-footer">          
            <div>
                <h4 class="bookName">{props.book.bookName}</h4>
                <br/>
                <p class="authorname">{props.book.authorName}</p>
            </div>
            <div class="ratings-panel">
            <div class="ratings">
            <span class="rating">{props.book.rating}</span>
            <img src={Star} alt="star" className = "starlogo" />
            </div>
            <div>
                <span className = "numbers">{props.book.bookCount}</span>
            </div>
            </div>
            <div class="price">
                <h4 class="discount">Rs. {props.book.price}</h4>
                <span class="actual">Rs. {props.book.originalPrice}</span>
            </div>
            </div>
          </div>
    )
}
export default Bookdetails