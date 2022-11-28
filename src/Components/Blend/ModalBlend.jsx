import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function ModalBlend  ({saveBlend, myBlend}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function continuar(){
        saveBlend();
        handleShow();
    }
    //add function to save data on myblend ddbb 
    // function saveOn(){
    //     handleClose();
    // }
  
    return (
      <>
        <Button variant="primary" onClick={continuar}>
        Continuar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>BLEND LISTO</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Seguro que quiere continuar?

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Pagar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar en MyBLends y pagar
            </Button>
           

          </Modal.Footer>
        </Modal>
      </>
    );

  
}
export default ModalBlend;