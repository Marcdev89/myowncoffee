import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from './Services/api';
//import axios from 'axios';

const AddCustomer = () => {

    

    const initialForm={
        name: "",
        email: "",
        id: null,
    }
    const [form, setForm] = useState(initialForm);

    const handleChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        } )
    }


    const enviarDatos =(e) =>{
        e.preventDefault();
        console.log(form.name)
        console.log(form.email)
        let datosEnviados = {
            name: form.name,
            email: form.email
        }

        fetch(api.customer+'?insertar=1', {
            method: "POST",
            body:JSON.stringify(datosEnviados)
          })
          .then(res=>res.json())
          .then((datosRespuesta)=>{
            console.log(datosRespuesta);
          })
           .catch(console.log);  
        };

    


  return (
    <div className='row'>
    <div className='col-md-12 text-center'>
        <h1>Add Customer</h1>
<form onSubmit={enviarDatos}>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input type="text" name="name" onChange={handleChange} value={form.name} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte customer's name</small>
        </div>

        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input type="text" name="email" onChange={handleChange} value={form.email} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte customr's email</small>
        </div>

        <div className="btn-group" role="group" aria-label="">
            <button type="submit" className="btn btn-success">Add new Customer</button>          
            <Link to={"/"} className="btn btn-cancel"> Cancel</Link>           
        </div>



        </form>

    </div>
</div>
  )
}

export default AddCustomer;