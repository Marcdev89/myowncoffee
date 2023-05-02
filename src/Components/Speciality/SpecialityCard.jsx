import Card from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button';


const SpecialityCard = ({data,addToCart, delFromCart}) => {
    //destructure data
    let {id, name, price, description, country, variety, sca, species}=data;


       return (

              <Card className='card-style' >
                <Card.Img variant="top" src={require(`../../Images/cafe-origen-${country}.png`)} />
                <Card.Header className='card-header-style'>{name}</Card.Header>
                <Card.Body className='card-body-style'>
                  <Card.Text> Descripción:  {description} </Card.Text>
                  <Card.Text>  Precio: {price} €/Kg </Card.Text>
                  <Card.Text> Variedad: {variety} </Card.Text>
                  <Card.Text> SCA: {sca} </Card.Text>
                  <Card.Text>  Especie: {species} </Card.Text> 
                    
                    
                   
                </Card.Body>
                <Card.Footer>
                  <Button variant="dark" onClick={()=> addToCart(id)}>Añadir al carrito</Button>
                    
                  <Button variant="dark" onClick={()=> delFromCart(id)}>Eliminar del carrito</Button>
                </Card.Footer>
              </Card> 
     )
   }
   
   export default SpecialityCard;