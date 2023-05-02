import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';


const AddProduct = () => {

    const initialForm={
        name: "",
        country: "",
        region: "",
        species: "",
        variety: "",
        description: "",
        sca: "",
        price:"",
        id: null,
    }

    const [form, setForm] = useState(initialForm);

    const handleChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        } )
    }
        //sending data to database
    const sendData =(e) =>{
        e.preventDefault();

           axios.post('http://localhost:8080/products/products', {
            name: form.name,
              country: form.country,
              region: form.region,
              species: form.species,
              variety: form.variety,
              description: form.description,
              sca: form.sca,
              price: form.price
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          alert('Producto añadido')


        };


  return (

    <Container className='dashboard'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h1>Añadir Producto</h1>
            <form onSubmit={sendData} className="add-product">
              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input type="text" name="name" onChange={handleChange} value={form.name} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Escribe el nombre del producto. Ejemplo: Guatemala San Benito</small>
              </div>
              <div className="form-group">
                <label htmlFor="">País:</label>
                <input type="text" name="country" onChange={handleChange} value={form.country} id="country" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">País origen del producto. Ejemplo: Guatemala</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Región:</label>
                <input type="text" name="region" onChange={handleChange} value={form.region} id="region" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Escribe la región del producto. Ejemplo: San Benito Carrillero</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Especie:</label>
                <input type="text" name="species" onChange={handleChange} value={form.species} id="species" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Especie del producto. Ejemplo: Arabica</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Variedad:</label>
                <input type="text" name="variety" onChange={handleChange} value={form.variety} id="variety" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Especie del producto. Ejemplo: Arabica</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Descripción:</label>
                <input type="text" name="description" onChange={handleChange} value={form.description} id="description" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Escribe la descripción organoléptica</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Puntuación SCA:</label>
                <input type="number" name="sca" onChange={handleChange} value={form.sca} id="sca" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Escriba el total de la puntuación SCA. Ejemplo: 82.45</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Precio:</label>
                <input type="number" name="price" onChange={handleChange} value={form.price} id="price" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Escriba el precio/kg en €</small>
              </div>
              <br></br>
              <div className="btn-group" role="group" aria-label="">
                  <button type="submit" className="btn btn-success">Añadir nuevo producto</button>
                  <Link to={"/list-products"} className="btn btn-cancel"> Cancelar</Link>
              </div>
            </form>
        </div>
      </div>
    </Container>
  )
}

export default AddProduct;