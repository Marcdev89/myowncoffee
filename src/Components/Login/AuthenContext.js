import { createContext, useState } from "react";

const AuthenContext = createContext();

const iniAuth=null;

const AuthenProvider = ({children}) => {
    const [auth, setAuth] = useState(iniAuth)

    const handleAuthen = (e) => {

        if (auth){
            setAuth(null)
        }else{
            setAuth(true)
        }
    }




    const dataLogin = {auth, handleAuthen}
    return <AuthenContext.Provider value={dataLogin}> {children} </AuthenContext.Provider>


}

export {AuthenProvider}
export default AuthenContext;