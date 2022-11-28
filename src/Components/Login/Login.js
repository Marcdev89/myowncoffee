// import { Navigate } from "react-router-dom";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { useRef } from "react";
import api from "../Services/api";

const sendData = async (url, data) => {
   const resp = await fetch(api.customer, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    })
    console.log(resp)
    const json = await resp.json()
    console.log(json)

}


const Login = () =>{

    const refUser= useRef(null)
    const refMail =useRef(null)

    const handleLogin=()=>{
        const data = {
            "user": refUser.current.value,
            "mail": refMail.current.value
        }
        console.log(data);
        sendData(api.customer, data);
   
    }



    return ( <div className="login">
        <div className="container"> 
        <h3>Iniciar Sesión</h3>
    <Form>
      

      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Label >Username</Form.Label>
        <Form.Control ref={refUser} type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={refMail}  type="email" placeholder="example@email.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

    
      <Button onClick={handleLogin} variant="primary">
        Acceder
      </Button>
    </Form>
    
    
    
    </div>
    </div>
    )
}

// const Login = () => {

//     const [user, setUser] = useState(null)
//     const [error, setError] = useState(null)

//   function login () {
// }

//     const  handleSubmit=(e) => {
//         e.preventDefault();
//         try {
//           let user = login(e.target);
//           setUser(user)
//         } catch (error) {
//           setError(error)
//         }
//       }
    
        
    


//         return (
//           <div>
//             {error && <p>{error.message}</p>}
//             {user && (
//               <Navigate to="/dashboard" replace={true} />
//             )}
//             <form
//               onSubmit={(e) => this.handleSubmit(e)}
//             >
//               <input type="text" name="username" />
//               <input type="password" name="password" />
//             </form>
//           </div>
//         );
//       }
    
  


export default Login