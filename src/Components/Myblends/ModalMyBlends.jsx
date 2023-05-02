import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function ModalMyBlends  ({handleDetails,val, title, body, myDetails}) {
    //show/hidden modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    //show details (products) onClick
function detalles (){
    handleShow();
    myDetails();
}
  
    return (
      <>
        <Button value={val}variant="primary" onClick={detalles}>
        Detalles
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {body}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Volver
            </Button>        
          </Modal.Footer>
        </Modal>
      </>
    );

  
}
export default ModalMyBlends;