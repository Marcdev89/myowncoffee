import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SpecialityCard from './SpecialityCard';


const SpecialityPage = () => {

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

     const addToCart = () =>{
        console.log("added")
     }
     const delFromCart = () =>{
        console.log("deleted")
     }
   
     //return a table with all products
    return(   
      <Container className='dashboard list-products'>
        <div className='row'> 
          <div className='col-md-12 text-center'>        
            <h1>Cafés de Especialidad</h1>
          </div> 
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                {/* <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">País</th>
                <th scope="col">Región</th>
                <th scope="col">Especie</th>
                <th scope="col">Variedad</th>
                <th scope="col">Descripción</th>
                <th scope="col">Puntuación SCA</th>
                <th scope="col">Precio</th>       */}
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {
            product.map((item,i)=>(<>
                <SpecialityCard 
                        data={item}
                        addToCart={addToCart}
                        delFromCart={delFromCart}

                            />

                {/* <tr key={item.id}>
                  <th scope="row">{i+1}</th>
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                  <td>{item.region}</td>
                  <td>{item.species}</td>
                  <td>{item.variety}</td>
                  <td>{item.description}</td>
                  <td>{item.sca}</td> 
                  <td>{item.price} €</td>   
                  <Button variant="outline-dark" >Añadir al carrito</Button>
                  <Button variant="outline-dark" >Eliminar del carrito</Button>
                                 
                </tr> */}
                </>
                ))
            }
            </tbody>
          </table>
        </div>
        </div>
      
        
      </Container>      
    )
}
export default SpecialityPage;