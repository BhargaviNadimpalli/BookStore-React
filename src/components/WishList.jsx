import React from "react";
import "../css/Wishlist.css";
import Header from "./header";
import bookImg from "../assets/bookimage.png";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { GetWishlist, RemovefromWishlist } from "../services/Bookservices";

export default function Wishlist() {
  const [mywishlistitems, setMywishlistitems] = React.useState([]);
  const loadwishlistitems = function () {
    let obj = {
      UserId: parseInt(localStorage.getItem("userId")),
    };
    GetWishlist(obj)
      .then(function (response) {
        console.log(response.data.data);
        setMywishlistitems(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    loadwishlistitems();
    return () => {};
  }, []);

  const handlemywishlist = function (obj) {
    RemovefromWishlist(obj.wishListId)
      .then(function (response) {
        console.log(response.data);
        loadwishlistitems();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="Wishlistpage">
      <Header />
      <p className="paths">
        <button className="gotohome"> Home / </button>
        <span id="pathtobook">My Wishlist</span>
      </p>
      <div className="wishlist-box">
        <h3 id="kdfg">My Wishlist(01)</h3>
      </div>
      <div className="wishlist-box-1">
      {mywishlistitems.map((bookdetail) => (
        <div>
          <img src={bookImg} alt="Image" className="booklogooooo" />
          <div className="book-details-carttt">
            <p id="cartitem-titleee">{bookdetail.books.bookName}</p>
            <p id="cartitem-authorrr">{bookdetail.books.authorName}</p>
            <p id="Priceee">Rs. {bookdetail.books.price}</p>{" "}
            <span id="discount-priceee"> Rs. {bookdetail.books.originalPrice}</span>
          </div>
          <div
            className="removeFromWishlistBtn"
            onClick={() => {
              handlemywishlist(bookdetail);
            }}
          >
            {" "}
            <DeleteOutlineOutlinedIcon />{" "}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}