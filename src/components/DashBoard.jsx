import React from "react";
import '../css/Dashboard.css'
import Header from "./header";
import Footer from "./footer";
import Bookdetails from "./BookDetails";
import { getallbooks } from "../services/Bookservices";
import { getbooks } from "../services/Bookservices";
import Bookdescription from "./BookDescription";
function DashBoard(props){
    const [singlebook, setSingleBook] = React.useState(null)
    const [displaysinglebook, setDisplaySingleBook] = React.useState(false)
    const [bookarray, setBookArray]=React.useState([])
    React.useEffect(() => {
    getallbooks().then(function(response){
         console.log(response.data.data)
         setBookArray(response.data.data)
     })
     .catch(function(error){
         console.log(error)
     })
     return() => {
    }
    },[])  
    const handlesetSingleBook = (book) => {
        setSingleBook(book);
      };
    
      const showsinglebook = () => {
        setDisplaySingleBook((prev) => !prev);
      };
    return(
        <div>
            {displaysinglebook ? (
                <div>
                    <Bookdescription singlebook = {singlebook} />
                </div>
            ) : (
                <div>
             <div>
                 <Header/>
             </div>
           
             <div className = "dashboardmapping">
                {
                    bookarray.map((x, index) => (
                    <Bookdetails book={x} key = {index}
                    handlesetSingleBook = {handlesetSingleBook}
                    showsinglebook = {showsinglebook}/>
                    ))}
               
            </div>    
             <div>
                 <Footer/>
             </div>
             </div>
             )}
        </div>
    );
}
export default DashBoard