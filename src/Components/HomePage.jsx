import { Container, Carousel } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <Container className="container-homepage">
      <div className="title-style">
        <h1>  MI PROPIO CAFÉ  </h1> 
          <img className="image-home" src={require(`./../Images/mipropiocafe.png`)} alt="foto de portada de café" />
      </div>
        <Container className="container-homepage-body">
          <p>Mi propio café nace de la idea de querer ir más allá a la hora
            de personalizar el café que queremos tomar.
          </p>
          <p>¿En qué consiste?</p>
          <p>Elige hasta 4 variedades de café según su origen (y características) y
            crea el blend que mejor se adapte a tus gustos y preferencias.
          </p>
          <Carousel className="carousel-style" interval={null}>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={require(`./../Images/cafe-origen-Colombia.png`)}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={require(`./../Images/cafe-origen-Brasil.png`)}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={require(`./../Images/cafe-origen-Ethiopia.png`)}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Button variant="outline-dark"  className="letsgo btn-letsgo">
            <Link className="letsgolink" to={"/make-blend"}>  EMPIEZA YA A CREAR TU BLEND </Link>
          </Button>
        </Container>
    </Container>
  )
}

export default HomePage