//import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';

function ListProduct(){

   
    const [product, setProduct] = useState([])

     const getProducts=()=> {         
            fetch(api.product)
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

    /* const deleteData = (id) => {
        let isDelete = window.confirm(`¿Seguro de eliminar con el "${id}"`)
      
      if (isDelete){
        let newData = db.filter((el)=> el.id !== id);
        setDb(newData);
      }
      
      }*/
        
     const delProduct = (id)=>{
        console.log(id);
        fetch(api.productDelete+id)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            getProducts(setProduct);
        })
        .catch(console.log)

     }
   

// const rellenaProva = () => {
//   product.map((el)=> provaobj.push({
//     prova: el
//   }))

 
// }
// rellenaProva();

    return(
    
        <div className='row'>
        <div className='col-md-12 text-center'>
        
            <h1>Product List</h1>
        </div>
        
        <div className="table-responsive">
 <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>

      
    </tr>
  </thead>
  <tbody className="table-group-divider">
        {
            product.map((item,i)=>(
                <tr key={item.id}>
                <th scope="row">{i+1}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>   
                <td><button><Link to={"/edit-product/"+item.id}> Editar</Link></button></td>
                <td><button onClick={()=>delProduct(item.id)}>Borrar</button></td>
                
              </tr>
            ))

        }
    
  </tbody>
</table>

</div>

    </div>
        
    )
}
export default ListProduct;