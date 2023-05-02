import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Step from '../Step';
import LoginContext from '../Login/loginContext';

function ModalBlend  ({cancelBlend, saveBlend, blendDb, handleRadio, myblendDetail, sendDetails}) {
    
  //show/hidden modal
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  //to check if user is logged
   const {log} = useContext(LoginContext);

    function continuar(){
        saveBlend();
        myblendDetail();
        handleShow();
    }

    function cancel(){
      cancelBlend();
      handleClose();
    }

    function toMyBlend(){
      blendDb();
      sendDetails();
      alert('Blend guardado')
    }

    return (
      <>
        <Button variant="dark" onClick={continuar}>
          Continuar
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>BLEND CASI LISTO <Step className="step-modal" percent="75%"/></Modal.Title>
          </Modal.Header>
          <Modal.Body > ¡Elige el tamaño de tu blend!
            <div className="form-check">
            <input onClick={handleRadio} value='3' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Grande: 1 kg
              </label>
            </div>
            <div className="form-check">
              <input onClick={handleRadio} value='2' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Mediano 500 g
                </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancel}>
              Cancelar
            </Button>
              <Link exact to='/purchase'> <Button  variant="dark" onClick={handleClose}> Comprar
            </Button></Link>
              {
              log &&
              (
              <Button variant="dark" onClick={toMyBlend}>
                Guardar en MyBLends 
              </Button>)}
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default ModalBlend;