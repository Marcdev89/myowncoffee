
import { Navigate, Outlet } from 'react-router-dom'



const AdminRoute = () => {
//authen logic here
    let auth;
auth = null;
auth=true;
 
  return auth ? <Outlet /> : <Navigate to ="/login" />;

  
}

export default AdminRoute