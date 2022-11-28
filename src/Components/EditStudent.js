import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from './Services/api';



function EditStudent(){
 
    const { id } = useParams();
   // console.log(id);
//    const initialForm={
//     name: "",
//     email: "",
//     id: null,
// }
    const [customer, setCustomer] = useState([])


   // const [form, setForm] = useState(initialForm);

    const handleChange = (e)=> {
        setCustomer({
            ...customer,
            [e.target.name]:e.target.value,
        } )
    }

    useEffect(() => {
        fetch(api.customer+"?consultar="+id)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
    
            setCustomer(data[0])
            console.log(data[0])  
        })
        .catch(console.log)
    }, [id])

    const enviarDatos =(e) =>{
        e.preventDefault();
         console.log("Actualizaaandoo..")
             let datosEnviados = {
            name: customer.name,
            email: customer.email,
            id: customer.id
         }
         console.log(datosEnviados.id)
         console.log(datosEnviados.name)
         console.log(datosEnviados.email)

         fetch(api.customer+'?actualizar=1', {
            method: "POST",
            body:JSON.stringify(datosEnviados)
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
            <h1>Edit Customer</h1>

           

            <form onSubmit={enviarDatos}>

        <div className="form-group">
          <label htmlFor="">ID:</label>
          <input type="text" value={id} readOnly name="name" onChange={handleChange} id="id" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">ID</small>
        </div>


        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input type="text" name="name" onChange={handleChange} value={customer.name} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte customer's name</small>
        </div>

        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input type="text" name="email" onChange={handleChange} value={customer.email} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Writte customr's email</small>
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
export default EditStudent;