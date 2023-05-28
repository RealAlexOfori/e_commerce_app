import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
  return(
     <ul>
       <li>
        <Link to="/products"> Products</Link>
       </li>
       <li>
        <Link to="/basket"> Basket</Link>
       </li>

    </ul>
  
);
}

export default NavBar;