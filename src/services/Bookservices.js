import axios from 'axios'
const header = {
    headers : {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem("Token")
          }
}
export const getallbooks = async function(obj){
    let response = await axios.post("https://localhost:44331/api/Book/GetAllBooks", obj, header) 
    return response
} 
export const getbooks = async function(obj){
    let response = await axios.get(`https://localhost:44331/api/Book/GetBook?bookId=${obj.BookId}`, obj, header) 
    return response
} 

export const Addtocart = async function(obj){
    let response = await axios.post("https://localhost:44331/api/Cart/AddToCart", obj, header) 
    return response
} 

export const Updatecart = async function(cartID, quantity){
    let response = await axios.put(`https://localhost:44331/api/Cart/UpadetCart?cartid=${cartID}&bookordercount=${quantity}`, null, header) 
    return response
} 

export const Getcart = async function(obj){
    let response = await axios.get(`https://localhost:44331/api/Cart/GetCartItem?userId=${localStorage.getItem("userId")}`, header) 
    return response
}

export const Removecart = async function(cartID){
    let response = await axios.delete(`https://localhost:44331/api/Cart/RemoveCart?cartId=${cartID} `, header) 
    return response
}
export const addtowishlist = async function(obj){
    let response = await axios.post("https://localhost:44331/api/Wishlist/AddToWishList", obj, header) 
    return response
}
export const GetWishlist = async function(obj){
    let response = await axios.get(`https://localhost:44331/api/Wishlist/getwishlist?userId=${localStorage.getItem("userId")}`, header) 
    return response
}
export const RemovefromWishlist = async function(wishListId){
    let response = await axios.delete(`https://localhost:44331/api/Wishlist/RemoveFromWishList?wishListId=${wishListId}`, header) 
    return response
}
