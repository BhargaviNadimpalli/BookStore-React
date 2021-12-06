import React from "react";
import Header from '../components/header.jsx'
import "../css/Cart.css";
import { useHistory } from "react-router";
import bookImg from "../assets/bookimage.png";
import { Getcart, Removecart, Updatecart } from "../services/Bookservices";

export default function CartList() {
    let history = useHistory()
  const [mycartitems, setMycartitems] = React.useState([]);

  const loadcartitems = function () {
    let obj = {
      UserId: parseInt(localStorage.getItem("userId")),
    };
    Getcart(obj)
      .then(function(response) {
        console.log(response.data.data);
        setMycartitems(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    loadcartitems();
    return () => {};
  }, []);

  const handlemycartcount = function (operation, obj) {
    let quantity = obj.bookOrderCount;
    let cartID = obj.cartID;
    if (quantity === 1) {
      operation = "remove";
    }
    console.log(quantity, cartID);
    switch (operation) {
      case "increment":
        quantity = obj.bookOrderCount + 1;
        Updatecart(cartID, quantity)
          .then(function (response) {
            console.log(response.data);
            loadcartitems();
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "decrement":
        quantity = obj.bookOrderCount - 1;
        Updatecart(cartID, quantity)
          .then(function (response) {
            console.log(response.data);
            loadcartitems();
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "remove":
        Removecart(cartID);
        loadcartitems();
        break;
      default:
        break;
    }
    loadcartitems();
  };

  const gotohomepage = function(){
    history.push("/Home")
  }
  return (
    <div className="cartpage">
      <Header />
      <p className="paths">
        <button className="homebutton" onClick = {gotohomepage}> Home / </button>
        <button id="pathtobookbutton">Mycart</button>
      </p>
      <div className="Mycartbox">
          <div className = "mycartdetails">
        <span id="mycart">My cart({mycartitems.length})</span>
        <div className="location-bar"></div>
        <br />
        {mycartitems.map((bookdetails) => (
          <div className="jfsd">
            <img src={bookImg} alt="Image" className="booklogooo" />
            <div className="book-details-cart">
              <p id="cartitem-title">{bookdetails.books.bookName}</p>
              <p id="cartitem-author">{bookdetails.books.authorName}</p>
              <p id="Price">Rs. {bookdetails.books.price}</p>{" "}
              <span id="discount-price">
                {" "}
                Rs. {bookdetails.books.originalPrice}
              </span>
            </div>
            <div id="cartcount-buttons">
              <div
                className="less-button"
                onClick={() => {
                  handlemycartcount("decrement", bookdetails);
                }}
              >
                −
              </div>
              <div className="countbox-view">{bookdetails.bookOrderCount}</div>
              <div
                className="more-button"
                onClick={() => {
                  handlemycartcount("increment", bookdetails);
                }}
              >
                ＋
              </div>
              <button
                className="remove-from-cart"
                onClick={() => {
                  handlemycartcount("remove", bookdetails);
                }}
              >
                Remove
              </button>
          </div>
          </div>
        ))}
        </div>
        <div className="placeorder">
             <p>PLACE ORDER</p>
        </div>
      </div>
    
      {/* <div className="cart-outercontainer"> */}
      {/* { */}
      {/* // !addressfields ? ( */}
      {/* // <div className="address-details-cart"> */}
      {/* <p id="addresss">Address Details</p> */}
      {/* </div> */}
      {/* // ) : null */}
      {/* // <CustomerDetails showsummary={showsummary} /> */}
      {/* } */}
      {/* </div> */}
      {/* <div className="cart-outercontainer"> */}
      {/* {!order ? ( */}
      {/* // <div className="order-details-cart"> */}
      {/* <p id="order">Order summary</p> */}
      {/* </div> */}
      {/* // ) : ( */}
      {/* // <div className="ordersummary-outer-box"> */}
      {/* <div className="title-bar-order"> */}
      {/* <p>Order Summary</p> */}
      {/* </div> */}
      {/* </div> */}
      {/* // )} */}
      {/* </div> */}
    </div>
  );
}
