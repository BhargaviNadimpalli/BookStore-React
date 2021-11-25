import axios from 'axios'
const header = {
    headers : {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem("Token")
          }
}
export const getbooks = async function(obj){
    let response = await axios.post("https://localhost:44331/api/Book/GetAllBooks", obj, header) 
    return response
} 
