import axios from "axios";
import { createContext, useState, useRef} from "react";
import api from "../Services/api";

const LoginContext = createContext();

const sendData = async (url, data) => {

    const dataResp = await fetch(api.login, {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
             'Content-Type':'application/json'
         }
     })
     //console.log(resp)
     const json = await dataResp.json()
     //console.log(json)
     return json;
 
 }



const LoginProvider = ({children}) => {

    const [admin, setAdmin] = useState(false)
    const [log, setLogged] = useState(localStorage.getItem("Log in"))
    const [idCustomer, setIdCustomer] = useState(localStorage.getItem("id"))
    const [name, setName] = useState(localStorage.getItem("name"))

    
    
    const refUser= useRef(null)
    const refMail =useRef(null)

    const handleLogin= async ()=>{
        const data = {
            "name": refUser.current.value,
            "email": refMail.current.value
        }
       // console.log(data);
       const respJson = await sendData(api.login, data);
       //console.log("response -> ", respJson);
      
       
       if (respJson.connect){
        localStorage.setItem("name", respJson.name)
        localStorage.setItem("email", respJson.email)
        localStorage.setItem("id", respJson.id)
        localStorage.setItem("Log in", respJson.connect)
        setName(localStorage.getItem('name'))
        setIdCustomer(localStorage.getItem('id'))
        setLogged(true)
        axios.get(api.admin+respJson.id)
        .then(response => {
            let result = response.data;
            console.log(result)
            if(result=='admin'){
                setAdmin(true)
            }else{
                setAdmin(false)
            }
        }).catch(e => {
            console.log(e);
        })
     

        //console.log(log)
        //console.log("nice")
       }else {
        //console.log(log)
        //console.log("lastima")
        setLogged(null)
       }
       console.log(log)
      
    }


    const logOut = () =>{
      setLogged(null)
      setAdmin(null)
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('id');
      localStorage.removeItem('Log in');
      localStorage.removeItem('admin');
    }
    const readOnly = () =>{
      console.log(admin)
      console.log(localStorage.getItem("lan"))
    }
 
 
 
     const dataLog= {refMail,refUser,log, idCustomer , name, handleLogin, logOut, readOnly};  
 
     return (
         <LoginContext.Provider value = {dataLog}> {children} </LoginContext.Provider>
     )
 }
 
 export {LoginProvider}
 export default LoginContext;