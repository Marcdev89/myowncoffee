import './App.css';
import AddStudent from './Components/AddStudent';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LanguageProvider } from './Components/Language/LanguageContext';
import Home from './Components/Home';
import EditStudent from './Components/EditStudent'; 
import ListStudent from './Components/ListStudent';
import AddCustomer from './Components/AddCustomer';
import ListProduct from './Components/Products-crud/ListProduct';
import AddProduct from './Components/Products-crud/AddProduct';
import EditProduct from './Components/Products-crud/EditProduct';
import BlendingCart from './Components/Blend/BlendingCart';
import Header from './Components/Header';
import { AuthenProvider } from './Components/Login/AuthenContext';
import AdminRoute from './Components/Login/AdminRoute';
import Login from './Components/Login/Login';


function App() {

   //<Header />

  return (
    <main className='container'>
      <AuthenProvider>
       <LanguageProvider>
  <Router>
   
    <Header />
    
 
    
    <div>
  <Routes>
    <Route path="/" element ={<Home />} />
    <Route path="/list-student" element ={<ListStudent />} />
    <Route path="/add-student" element ={<AddStudent />} />
    <Route path="/add-customer" element ={<AddCustomer />} />
    <Route path="/edit-customer/:id" element ={<EditStudent />} />  
    {/* <Route path="/list-products" element ={<ListProduct />} />  */}
   
    <Route path="/add-product" element ={<AddProduct />} /> 
    <Route path="/edit-product/:id" element ={<EditProduct />} />
    <Route path="/make-blend" element ={<BlendingCart />} />
    <Route exact path="/login" element = {<Login />} />
    <Route exact path="/list-products" element= {<AdminRoute />}>
     <Route exact path ="/list-products" element ={<ListProduct />}/>
     </Route>

  </Routes>
  </div>

  </Router>
  </LanguageProvider>
  </AuthenProvider>
  </main>
    
  );
}

export default App;
