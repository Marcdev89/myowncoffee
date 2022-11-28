import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddStudent = () => {

   let history = useNavigate(); 

    const[student, setStudent] = useState({
        first_name:"",
        last_name:"",
        email:"",
    })

    const {first_name, last_name, email} = student;

    const handleChange=(e) => {
        setStudent({...student, [e.target.name]: e.target.value})

    }

    const submitForm = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost/student/insert.php", student)
        .then((res)=>{
            console.log(res.data);
            if(res.data.status==='valid'){
               history(`/list-student`);
            }else{
                alert('Problem in adding, try again')
            }
        });
        }   




  return (
    <form onSubmit={e=> submitForm(e)}>
    <div className='row'>
        <div className='col-md-12 text-center'>
            <h1>Add Student</h1>
        </div>
    </div>

    <div className='row'>
        <div className='col-md-6'>First Name</div>
        <div className='col-md-6'>
        <input type="text" name="first_name" className ="form-control"
        value={first_name} onChange={e=>handleChange(e)} />
        </div>
    </div>

    <div className='row'>
        <div className='col-md-6'>Last Name</div>
        <div className='col-md-6'>
        <input type="text" name="last_name" className ="form-control"
           value={last_name} onChange={e=>handleChange(e)} /> 
        </div>
    </div>

    <div className='row'>
        <div className='col-md-6'>Email</div>
        <div className='col-md-6'>
        <input type="email" name="email" className ="form-control" 
           value={email} onChange={e=>handleChange(e)} />
        </div>
    </div>

    <div className='row'>
        <div className='col-md-12'>
            <input type="submit" className="btn btn-warning" name="submit" value="Add Student" />
        </div>
    </div>


    </form>
 
    
  )
}

export default AddStudent;