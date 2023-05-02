import {useState, useEffect, useContext} from 'react'
import api from '../Services/api'
import LoginContext from '../Login/loginContext';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import Title from '../Blend/Title';
import  Card  from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import './myblends.css';


const MyblendsPage = () => {
  //get name for customize page and id for get blends from database
  const {name, idCustomer} = useContext(LoginContext);
  const [blend, setBlend] = useState([])
  const [details, setDetails] = useState(null)
        
    //show/hidden details
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const text = 'My Blends';

    //get blends from user
  useEffect(() => {
    axios.get(api.myblendsQueryAll+idCustomer)
    .then(response => {
      let result = response.data;
      console.log(result)
      setBlend(result)
    }).catch(e => {
      console.log(e);
    })
  },[])

  //get details from blend ID (myblends_details table)
function handleDetail(e){
     let blend= e.target.value; 
      axios.get(api.myblendsDetails+blend)
      .then(response => {
        let result = response.data;
        //console.log(blend)
        //console.log(result)
        setDetails(result)
        //setFproduct(['Brasil','Guatemala'])
      }).catch(e => {
        console.log(e);
      })
}

function myDetails(e){
  handleDetail(e);
  handleShow();
}

  return (

          <Container className='myblends-page'>
            <Container>
              <Title text={text} img={'myblends'}/>
            </Container>
            <p className='myblends-p-style'>Bienvenido a tu espacio personal de blends: {name}</p>
            <Container className='myblends-style'>  
            { 
            blend.map((e, index)=> 
                      <>
                        <Card className='card-style myblends-item'>
                          <Card.Header className='card-header-style'>Blend nº {index+1}</Card.Header>
                          <Card.Body>Precio total del blend: {e.price}€ 
                            Tamaño: {e.size==3?'grande (1kg)':'mediano (500g)'}
                          </Card.Body>
                          <Card.Footer>
                            <Button value={e.id}variant="dark" onClick={myDetails}>
                              Detalles
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Detalles del blend seleccionado</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              {
                              details &&
                              (<div className='container'> <p>Selección de cafés:</p>
                              {
                              details.map((el)=>                           
                                <li> {el.name} - {el.description} </li>
                              )}</div>          
                              )  
                              }
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Volver
                                </Button>        
                              </Modal.Footer>
                            </Modal>
                            </Card.Footer>
                        </Card>
                      </>
                          
                     )
            }
            </Container>
          </Container>
  )
}

export default MyblendsPage