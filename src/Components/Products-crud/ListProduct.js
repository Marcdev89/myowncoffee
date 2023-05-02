import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../Services/api';

function ListProduct(){

        //state and effect to get data from products
    const [product, setProduct] = useState([])

    const getProducts=()=> {         
            fetch("http://localhost:8080/products/products")
            .then(res=>res.json())
            .then((data)=>{
                setProduct(data)                          
            })
            .catch(console.log)
        }

    useEffect(() => {
      getProducts();
        }, 
     [])
        //delete product from database
     const delProduct = (id)=>{
        console.log(id);
        fetch(api.productDelete+id)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            getProducts(setProduct);
        })
        .catch(console.log)
        alert('Producto eleminado')
     }
     //return a table with all products
    return(   
      <Container className='dashboard list-products'>
        <div className='row'> 
          <div className='col-md-12 text-center'>        
            <h1>Lista de Productos</h1>
          </div> 
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">País</th>
                <th scope="col">Región</th>
                <th scope="col">Especie</th>
                <th scope="col">Variedad</th>
                <th scope="col">Descripción</th>
                <th scope="col">Puntuación SCA</th>
                <th scope="col">Precio</th>      
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {
            product.map((item,i)=>(
                <tr key={item.id}>
                  <th scope="row">{i+1}</th>
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                  <td>{item.region}</td>
                  <td>{item.species}</td>
                  <td>{item.variety}</td>
                  <td>{item.description}</td>
                  <td>{item.sca}</td> 
                  <td>{item.price} €</td>   
                  <td><Button variant="dark"><Link className='btn-dash' to={"/edit-product/"+item.id}> Editar</Link></Button></td>
                  <td><Button variant="danger" onClick={()=>delProduct(item.id)}>Borrar</Button></td>                 
                </tr>
                ))
            }
            </tbody>
          </table>
        </div>
        </div>
      </Container>      
    )
}
export default ListProduct;