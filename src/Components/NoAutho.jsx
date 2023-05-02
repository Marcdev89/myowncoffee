import Container from "react-bootstrap/Container"


const NoAutho = () => {

  return ( 
    <Container className="noautho">
      <h1>NO TIENES PERMISOS</h1>
        <br></br>
      <p>Estás intentando acceder a una área restringida</p>
      <img className="forbidden" src={require(`./../Images/forbidden.png`)} alt="imagen de prohibido" />
    </Container>
    )
}

export default NoAutho

