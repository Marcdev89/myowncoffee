import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../Services/api';
//import axios from 'axios';

const AddProduct = () => {    

    const initialForm={
        name: "",
        description: "",
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


    const sendData =(e) =>{
        e.preventDefault();
        console.log(form.name)
        console.log(form.description)
        console.log(form.price)

        let newData = {
            name: form.name,
            description: form.description,
            price: form.price
        }

        fetch(api.productInsert, {
            method: "POST",
            body:JSON.stringify(newData)
          })
          .then(res=>res.json())
          .then((dataRes)=>{
            console.log(dataRes);
          })
           .catch(console.log);  
        };

    


  return (
    <div className='row'>
    <div className='col-md-12 text-center'>
        <h1>Add Product</h1>
<form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input type="text" name="name" onChange={handleChange} value={form.name} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte product's name</small>
        </div>

        <div className="form-group">
          <label htmlFor="">Description:</label>
          <input type="text" name="description" onChange={handleChange} value={form.description} id="description" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte the description</small>
        </div>

        <div className="form-group">
          <label htmlFor="">Price:</label>
          <input type="number" name="price" onChange={handleChange} value={form.price} id="price" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Put the price on €</small>
        </div>

        <div className="btn-group" role="group" aria-label="">
            <button type="submit" className="btn btn-success">Add new Product</button>          
            <Link to={"/list-products"} className="btn btn-cancel"> Cancel</Link>           
        </div>



        </form>

    </div>
</div>
  )
}

export default AddProduct;