import { createContext, useState } from "react";

const LanguageContext = createContext();

const iniLanguage = "es";
const translations = {
    es: {
        navHome: "inicio",
    },

    en: {
        navHome: "Home",
    },

    cat: {
        navHome: "Inici",
    }
};

const LanguageProvider = ({children}) => {

   const [lan, setLan] = useState(iniLanguage);
   const [text, setText] = useState(translations[lan]);

   const handleLanguage = (e) =>{
console.log(e.target.value)
    switch (e.target.value) {
        case "es":
            setLan("es");
            setText(translations.es)          
            break;
        case "cat":
            setLan("cat");
            setText(translations.cat)
        break;  
        default: 
        setLan("en");
        setText(translations.en)             
    }
   }

    



    const dataLan= {text, handleLanguage};  

    return (
        <LanguageContext.Provider value = {dataLan}> {children} </LanguageContext.Provider>
    )
}

export {LanguageProvider}
export default LanguageContext;