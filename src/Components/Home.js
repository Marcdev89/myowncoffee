import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from './Services/api';

function Home(){

    const [customer, setCustomer] = useState([])
   // const [db, setDb] = useState(null)


    const getCustomers = async (state) => {
        const petition = await axios.get(api.customer)
        state(petition.data)
    }

    useEffect(() => {
      getCustomers(setCustomer);
        }, 
     [])

    /* const deleteData = (id) => {
        let isDelete = window.confirm(`¿Seguro de eliminar con el "${id}"`)
      
      if (isDelete){
        let newData = db.filter((el)=> el.id !== id);
        setDb(newData);
      }
      
      }*/
        
     const borrarRegistro = (id)=>{
        console.log(id);
        fetch(api.customer+"?borrar="+id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            getCustomers(setCustomer);
        })
        .catch(console.log)

     }






    return(
    
        <div className='row'>
        <div className='col-md-12 text-center'>
            <h1>Welcome To HOME</h1>
           
        </div>
        
        <div className="table-responsive">
 <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>

      
    </tr>
  </thead>
  <tbody className="table-group-divider">
        {
            customer.map((item,i)=>(
                <tr key={item.id}>
                <th scope="row">{i+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td><button><Link to={"/edit-customer/"+item.id}> Editar</Link></button></td>
                <td><button onClick={()=>borrarRegistro(item.id)}>Borrar</button></td>
                
              </tr>
            ))

        }
    
  </tbody>
</table>

</div>

    </div>
        
    )
}
export default Home;