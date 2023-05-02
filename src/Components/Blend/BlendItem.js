import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const BlendItem = ({data, delFromBlend}) => {

    let { id, name, price}=data;

  return (
          <Card className="card-blend-style" >
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text> Precio/kg: {price} €
            </Card.Text> <Button variant="dark" onClick={()=>delFromBlend(id)}>Eliminar</Button>
            </Card.Body>
          </Card> 
  )
}