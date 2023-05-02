import Card from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button';


const ProductBlend = ({data,addToBlend}) => {
    //destructure data
    let {id, name, price, description}=data;

       return (

              <Card className='card-style' >
                <Card.Img variant="top" src={require(`../../Images/cafe-origen-${name}.png`)} />
                <Card.Header className='card-header-style'>{name}</Card.Header>
                <Card.Body className='card-body-style'>
                  <Card.Text> Descripción:  {description} </Card.Text>
                    Precio: {price} €/Kg
                </Card.Body>
                <Card.Footer>
                  <Button variant="dark" onClick={()=> addToBlend(id)}>Agregar</Button>
                </Card.Footer>
              </Card> 
     )
   }
   
   export default ProductBlend;