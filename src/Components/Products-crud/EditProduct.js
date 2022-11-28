import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../Services/api";



function EditProduct(){
 
    const { id } = useParams();
   // console.log(id);
//    const initialForm={
//     name: "",
//     email: "",
//     id: null,
// }
    const [product, setProduct] = useState([])


   // const [form, setForm] = useState(initialForm);

    const handleChange = (e)=> {
        setProduct({
            ...product,
            [e.target.name]:e.target.value,
        } )
    }

    useEffect(() => {
        fetch(api.productQuery+id)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
    
            setProduct(data[0])
            console.log(data[0])  
        })
        .catch(console.log)
    }, [id])

    const sendData =(e) =>{
        e.preventDefault();
         console.log("Actualizaaandoo..")
             let newData = {
            name: product.name,
            description: product.description,
            price: product.price,
            id: product.id
         }
         console.log(newData.id)
         console.log(newData.name)
         console.log(newData.description)
         console.log(newData.price)

         fetch(api.productUpdate, {
            method: "POST",
            body:JSON.stringify(newData)
          })
          .then(res=>res.json())
          .then((datosRespuesta)=>{
            console.log(datosRespuesta);
          })
           .catch(console.log);  
        };
    
   
 



    return(
        <div className='row'>
        <div className='col-md-12 text-center'>
            <h1>Edit Product</h1>

           

            <form onSubmit={sendData}>

        <div className="form-group">
          <label htmlFor="">ID:</label>
          <input type="text" value={id} readOnly name="id" onChange={handleChange} id="id" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">ID</small>
        </div>


        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input type="text" name="name" onChange={handleChange} value={product.name} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte product's new name</small>
        </div>

        <div className="form-group">
          <label htmlFor="">Description:</label>
          <input type="text" name="description" onChange={handleChange} value={product.description} id="description" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte product's new description</small>
        </div>

        <div className="form-group">
          <label htmlFor="">Price:</label>
          <input type="number" name="price" onChange={handleChange} value={product.price} id="price" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Put the new price on €</small>
        </div>

        <div className="btn-group" role="group" aria-label="">
            <button type="submit" className="btn btn-success">Editar</button>          
            <Link to={"/"} className="btn btn-cancel"> Cancel</Link>
           
        </div>
        </form>



        </div>
    </div>
    )
}
export default EditProduct;