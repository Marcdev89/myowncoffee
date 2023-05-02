import { createContext, useState } from "react";

const LanguageContext = createContext();

const iniLanguage = localStorage.getItem('lan') ? localStorage.getItem('lan') : 'es';
const translations = {
    es: {
        navHome: "Inicio",
        navMake: "Crea tu Blend",
        navAdd: "Añadir producto",
        navList: "Lista de productos",
        navLog: "| Conecta |",
        navLogout: "| Desconecta |",
        navLan: "Idioma",
    },

    en: {
        navHome: "Home",
        navMake: "Make a Blend",
        navAdd: "Add new product",
        navList: "Product List",
        navLog: "| Login |",
        navLogout: "| Logout |",
        navLan: "Language",
    },

    cat: {
        navHome: "Inici",
        navMake: "Crea el teu Blend",
        navAdd: "Afegeix un producte",
        navList: "Llista de productes",
        navLog: "| Conectar-se |",
        navLogout: "| Desconectar-se |",
        navLan: "Idioma",
    }
};

const LanguageProvider = ({children}) => {

   const [lan, setLan] = useState(iniLanguage);
   const [text, setText] = useState(translations[lan]);
    //handler navbar's select language
    const handleLanguage = (e) =>{
        //console.log(e.target.value)
        switch (e.target.value) {
            case "es":
                setLan("es");
                setText(translations.es) 
                localStorage.setItem('lan',e.target.value)          
                break;
            case "cat":
                setLan("cat");
                setText(translations.cat)
                localStorage.setItem('lan',e.target.value) 
                break;
            case "en":
                setLan("en");
                setText(translations.en)
                localStorage.setItem('lan',e.target.value)   
                break;        

            default: 
            //setLan(iniLanguage)
            setText(translations.iniLanguage)                 
        }
    }

    const dataLan= {text, handleLanguage};  

    return (
        <LanguageContext.Provider value = {dataLan}> {children} </LanguageContext.Provider>
    )
}

export {LanguageProvider}
export default LanguageContext;