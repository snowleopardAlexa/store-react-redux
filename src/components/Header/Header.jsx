import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaUserCircle} from 'react-icons/fa';
import "./Header.scss";

function Header() {

const [term, setTerm] = useState("");

const submitHandler = (e) => {
  e.preventDefault();
  console.log(term);
}

    return (
     <div className="header">
         <div className="logo">
           <Link to="/">Movie App</Link>
         </div>   
       <div className="search-bar">
         <form onSubmit={submitHandler}>
           <input 
             type="text" 
             value={term} 
             placeholder="Search Movies or Shows" 
             onChange={(e) => setTerm(e.target.value)} />
           <button type="submit"><i className="fa fa-search"></i></button>
         </form>
       </div>  
       <div className="user-image">
         <FaUserCircle />
       </div>
     </div>
    );
  };
  
  export default Header;