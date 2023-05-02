import LoginContext from '../Login/loginContext';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';

const Myblends = () => {
    //just for redirect to login page if log(false)
    const {log} = useContext(LoginContext);

    return log ? <Outlet /> : <Navigate to ="/login" />;

};

export default Myblends