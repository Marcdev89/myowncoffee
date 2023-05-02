import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

  //its just a template page

const Purchase = () => {

const [ok, setOk] = useState(null)

const handOk = () =>{
    !ok ?
    setOk('El pedido se ha realizado correctamente'): setOk(null)
  }

const handOknull = () =>{
  setOk(null);
}

  return (
    <Container className='dashboard'>
      <div> 
        <h1>Datos del comprador</h1>
        <form className="row g-3">
          <div className="col-12">
            <label className="form-label">Nombre y apellidos</label>
            <input type="text" className="form-control"  placeholder="Nombre..."/>
          </div>
          <div className="col-12">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control"  placeholder="comprador@gmail.com"/>
          </div>
          <div className="col-md-6">
            <label for="inputCity" class="form-label">Teléfono de contacto</label>
            <input type="number" class="form-control" id="inputCity"/>
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">Tienda</label>
            <select id="inputState" className="form-select">
              <option selected>...</option>
              <option>C/ Balmes</option>
              <option>C/ General Mitre</option>
            </select>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
              <label className="form-check-label" for="gridCheck">
                Marca esta opción para dar permiso para recibir información sobre nuevas
                ofertas y promociones.
              </label>
            </div>
          </div>
          <div class="col-12">
           <Button variant='dark' onClick={handOk} className="btn btn-primary">Realizar pedido</Button>
          {
            ok ? (
              <Link exact to ='/'><Button onClick={handOknull} variant='outline-dark'>Volver</Button> </Link> 
            ) : (

              <Link exact to ='/'><Button onClick={handOknull} variant='outline-dark'>Cancelar Compra</Button> </Link> 
            )
          }
          </div>
        </form>       
      </div>
      <p>{ok}</p>
    </Container>
  )
}

export default Purchase