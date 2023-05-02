import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import  Container  from "react-bootstrap/Container";
import LanguageContext from "./Language/LanguageContext";
import LoginContext from "./Login/loginContext";

function Header(){
  const {text, handleLanguage} = useContext(LanguageContext);
  const {log} = useContext(LoginContext);
//check if user is admin role
  //const admin = localStorage.getItem('name');
  const admin = 'admin';
  


    return(   
      <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" fixed="top" >
            <Container fluid className="header" >
              <Navbar.Brand  href="/">
                  <img
                      src="/coffee_logo.svg"
                      width="40"
                      height="40"
                      className="d-inline-block align-top logo-nav"
                      alt="Mi propio café logo"
                    />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav variant="pills" className="me-auto">       
                      {/*  registerLogic ?
                      <NavLink exact to="/add-customer" activeClassName='active'>
                      Add customer</NavLink>
                      */}
                <Nav.Link ><NavLink className="textNav" exact to="/" activeClassName='active'>{text.navHome}</NavLink></Nav.Link>
                <Nav.Link >  <NavLink className="textNav" exact to="/make-blend" activeClassName='active'>{text.navMake}</NavLink></Nav.Link>
                <Nav.Link >  <NavLink className="textNav" exact to="/myblends" activeClassName='active'>My Blends</NavLink></Nav.Link>
                <Nav.Link >  <NavLink className="textNav" exact to="/speciality" activeClassName='active'>Cafés de especialidad</NavLink></Nav.Link>
                <Nav.Link >  <NavLink className="textNav" exact to="/register" activeClassName='active'>Regístrate</NavLink></Nav.Link>

              </Nav> 
            {
            admin==='admin' &&
            ( 
              <Nav className= "justify-content-center">
                <Nav.Link > <NavLink className="textNav" exact to="/list-products" activeClassName='active'>{text.navList}</NavLink></Nav.Link>
                <Nav.Link > <NavLink className="textNav" exact to="/add-product" activeClassName='active'>{text.navAdd}</NavLink></Nav.Link> 
              </Nav>
            )
            }
              <Nav className="justify-content-end">
            {
            log  ? 
            ( 
                <Nav.Link > <NavLink  className="textNav" exact to="/login" activeClassName='active'>{text.navLogout}</NavLink></Nav.Link>) 
            : (
                <Nav.Link ><NavLink className="textNav" exact to="/login" activeClassName='active'>{text.navLog}</NavLink></Nav.Link>)      
            }
                <select className= "language" onChange={handleLanguage}>
                  <option selected value="es">{text.navLan}</option>
                  <option value="es">ES</option>
                  <option value="en">EN</option>      
                  <option value="cat">CAT</option>
                </select>
              </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}
export default Header;