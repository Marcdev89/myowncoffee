import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LanguageContext from "./Language/LanguageContext";

function Header(){
  const {text, handleLanguage} = useContext(LanguageContext);

    return(
      <header>
      <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav">
      <select name= "language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>      
        <option value="cat">CAT</option>
      </select>
          {/* <a className="nav-item nav-link active" href="/">{text.navHome} <span class="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/add-customer">Add customer</a>
          <a className="nav-item nav-link" href="/list-products">List Products</a>
          <a className="nav-item nav-link" href="/add-product">Add Product</a>
          <a className="nav-item nav-link" href="/make-blend">Make a blend</a> */}
          <NavLink exact to="/" activeClassName='active'>{text.navHome}</NavLink>
          <NavLink exact to="/add-customer" activeClassName='active'>Add customer</NavLink>
          <NavLink exact to="/list-products" activeClassName='active'>List Products</NavLink>
          <NavLink exact to="/add-product" activeClassName='active'>Add Product</NavLink>
          <NavLink exact to="/make-blend" activeClassName='active'>Make a blend</NavLink>
          <NavLink exact to="/login" activeClassName='active'>Login</NavLink>
      

      </div>
  </nav>
  </header>





    )
}
export default Header;