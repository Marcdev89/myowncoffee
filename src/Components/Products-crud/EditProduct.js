import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../Services/api";
import { Container } from "react-bootstrap";



function EditProduct(){
    //id from product to edit
    const { id } = useParams();
    const [product, setProduct] = useState([])

    const handleChange = (e)=> {
        setProduct({
            ...product,
            [e.target.name]:e.target.value,
        } )
    }

    //get data from products by ID
    useEffect(() => {
        fetch(api.productQuery+id)
        .then(res=>res.json())
        .then((data)=>{
           // console.log(data)
            setProduct(data[0])
           // console.log(data[0])  
        })
        .catch(console.log)
    }, [id])

      //sending data to database 
    const sendData =(e) =>{
        e.preventDefault();
             let newData = {
            name: product.name,
            description: product.description,
            price: product.price,
            id: product.id
         }
         fetch(api.productUpdate, {
            method: "POST",
            body:JSON.stringify(newData)
          })
          .then(res=>res.json())
          .then((datosRespuesta)=>{
            console.log(datosRespuesta);
          })
           .catch(console.log); 
           alert('Producto editado') 
        };
    
    return(
      <Container className="dashboard">
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
              <label htmlFor="">Nombre de origen:</label>
              <input type="text" name="name" onChange={handleChange} value={product.name} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted"> Escribe el nuevo nombre</small>
            </div>

            <div className="form-group">
              <label htmlFor="">Descripción organoléptica:</label>
              <input type="text" name="description" onChange={handleChange} value={product.description} id="description" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Escribe la nueva descripción</small>
            </div>

            <div className="form-group">
              <label htmlFor="">Precio €/kg:</label>
              <input type="number" name="price" onChange={handleChange} value={product.price} id="price" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Escribe el nuevo precio en €</small>
            </div>

            <div className="btn-group" role="group" aria-label="">
              <button type="submit" className="btn btn-success btn-edit">
                Editar
              </button>         
              <button className="btn btn-outline-success"> <Link to={"/list-products"} className="btn btn-cancel"> Volver</Link>
              </button>
            </div>
          </form>
          </div>
        </div>
      </Container>
    )
}
export default EditProduct;