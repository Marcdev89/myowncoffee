import { TYPES_BLEND } from "./actionBlend";
import api from "../Services/api";
import axios from "axios";

export const getIni = async (state) => {
     const petition = await axios.get(api.product)
     state(petition.data)   
     } 

export const blendingInitialState = {
    products: [],
    blendCart: [],
    fullCart: false          
};

//onst blendSize = 3; //LA SELECCION DEL SELECT

export function blendingReducer(state,action){
    switch (action.type) {
        case TYPES_BLEND.READ_ALL_DATA:{
            return {
                    ...state,
                     products: action.payload.map((data)=>data),
                    }
        }
        case TYPES_BLEND.NO_DATA_FOUND:{
            return console.log("kheeeeee");
        }
        case TYPES_BLEND.ADD_TO_BLEND:{
            let newItem = state.products.find((product) => product.id === action.payload);
           //console.log(newItem);
            let itemInBlend = state.blendCart.find(item=> item.id===newItem.id)
            if (state.full){
                console.log("it's full")
            }
           // if (state.blendCart.length<blendSize){
                if (itemInBlend){
                    alert("Ya has añadido este producto al blend")
                    console.log("REPE")
                    return { ...state }
                }else{
                    console.log("nuevo")
                    return { 
                            ...state,
                            blendCart: [...state.blendCart, 
                            {...newItem,quantity:1}]}
       
                }  //SE REPITEN LAS ALERTAS DOS VECES
        }

        case TYPES_BLEND.REMOVE_FROM_BLEND:{
            return {
                    ...state,
                    blendCart: state.blendCart.filter((item) => item.id !== action.payload)
        }}

        case TYPES_BLEND.FULL:
            if(action.payload)
             alert('El Blend ya está lleno')
            return { ...state} 

            

        case TYPES_BLEND.CLEAR_BLEND:{ return blendingInitialState;
        }
        default: return state;
    }
}
