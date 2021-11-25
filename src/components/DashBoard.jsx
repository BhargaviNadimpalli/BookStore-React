import React from "react";
import '../css/Dashboard.css'
import Header from "./header";
import Footer from "./footer";
import Bookdetails from "./BookDetails";
import { getbooks } from "../services/Bookservices";
function DashBoard(){
    const [bookarray, setBookArray]=React.useState([])
    React.useEffect(() => {
    getbooks().then(function(response){
         console.log(response.data.data)
         setBookArray(response.data.data)
     })
     .catch(function(error){
         console.log(error)
     })
     return() => {
    }
    },[])  
    return(
        <div>
             <div>
                 <Header/>
             </div>
           
             <div className = "dashboardmapping">
                {
                    bookarray.map((x) => (<Bookdetails book={x}/>))
                }
            </div>
             <div>
                 <Footer/>
             </div>
        </div>
    )
}
export default DashBoard