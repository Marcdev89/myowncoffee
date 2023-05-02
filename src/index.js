import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { LoginProvider } from './Components/Login/loginContext';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
        <Footer />
    </LoginProvider>
   
  </React.StrictMode>
);
reportWebVitals();
