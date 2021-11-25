import axios from 'axios'
const header = {
    headers : {
        "Access-Control-Allow-Origin": "*", Authorized: "Bearer" + " " + localStorage.getItem("Token")
    }
}

export const signUp = async function(obj){
    let response = await axios.post("https://localhost:44331/api/User/register", obj, header) 
    return response
} 

export const signIn = async function(obj){
    let response = await axios.post("https://localhost:44331/api/User/login", obj, header)
    return response 
} 
export const forgotpassword = async function(obj){
    let response = await axios.post(`https://localhost:44331/api/User/forgetPassword?Email=${obj.Email}`, obj, header)
    return response 
} 