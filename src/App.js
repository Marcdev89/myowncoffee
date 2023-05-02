import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LanguageProvider } from './Components/Language/LanguageContext';
import ListProduct from './Components/Products-crud/ListProduct';
import AddProduct from './Components/Products-crud/AddProduct';
import EditProduct from './Components/Products-crud/EditProduct';
import BlendingCart from './Components/Blend/BlendingCart';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import MyblendsPage from './Components/Myblends/MyblendsPage';
import Myblends from './Components/Myblends/Myblends';
import NoAutho from './Components/NoAutho';
import Purchase from './Components/Purchase';
import HomePage from './Components/HomePage';
import Register from './Components/Login/Register';
import SpecialityPage from './Components/Speciality/SpecialityPage';




function App() {

 // const name = localStorage.getItem('name')
  const name = 'admin';

  return (
     
          <LanguageProvider>
            <Router>
              <Header />
                <Routes>
                {/* registerLogic?<Route path="/add-customer" element ={<AddCustomer />} /> */}
                  <Route path="/" element ={<HomePage />} />  
                  {
                  name=="admin" ?
                  (
                  <> 
                    <Route exact path="/add-product" element ={<AddProduct />} /> 
                    <Route exact path ="/list-products" element ={<ListProduct />}/> 
                    <Route exact path="/edit-product/:id" element ={<EditProduct />} /> 
                  </>
                  ):
                  <>
                    <Route path="/add-product" element ={<NoAutho />} /> 
                    <Route exact path ="/list-products" element ={<NoAutho />}/>
                    <Route path="/edit-product/:id" element ={<NoAutho />} /> 
                  </>
                  }
                  <Route path="/purchase" element ={<Purchase />} />
                  <Route path="/register" element ={<Register />} />
                  <Route path="/make-blend" element ={<BlendingCart />} />
                  <Route exact path="/login" element = {<Login />}/>
                  <Route exact path="/myblends" element = {<Myblends />}>
                      <Route exact path = "/myblends/" element = {<MyblendsPage />}/>
                  </Route> 
                  <Route path="/speciality" element ={<SpecialityPage />} />
                </Routes>
            </Router>
          </LanguageProvider>
  );
}

export default App;
