import { useContext, createContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import LoginContext from "./loginContext";
import { Container } from "react-bootstrap";

export const IsLogContext = createContext();




function Login (){

  const {refUser, refMail, log, handleLogin, logOut} = useContext(LoginContext);

    return (
      
      
      <Container className="login">
        {!log ?
          (     
          <Container className="container-form"> 
           <h3>Iniciar Sesión</h3>
            <Form >
              <Form.Group  className="mb-3" controlId="formBasicPassword">
                <Form.Label >Nombre de usuario/a</Form.Label>
                <Form.Control ref={refUser} type="text" placeholder="Escribe aquí el nombre..." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control ref={refMail}  type="email" placeholder="example@email.com" />
                <Form.Text className="text-muted">
                  No compartiremos tu e-mail con nadie más.
                </Form.Text>
              </Form.Group>
                <Button  onClick={handleLogin} variant="dark">
                  Acceder
                </Button>
              </Form>
          </Container>
          ):(
          <Container className="container-form">
            <h2>Bienvenido/a, {localStorage.getItem('name')}</h2>
              <br></br>
                <Button onClick={logOut} variant="dark">
                  Log out
                </Button>
          </Container>
          )
          }
      </Container>
    )
}


export default Login
