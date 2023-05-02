import { TYPES_BLEND } from "./actionBlend";
import api from "../Services/api";
import axios from "axios";

//method get to put initial state (products)
export const getIni = async (state) => {
     const petition = await axios.get(api.product)
     state(petition.data)   
     } 

export const blendingInitialState = {
    products: [],
    blendCart: [],
    fullCart: false          
};
//ALERTS ADDING PRODUCTS
function tooMuch(){
    alert('El blend ya está lleno')
}
function already(){
    return alert('Ya has añadido este producto al blend')
}

    //LOGIC BLENDING, WE USE ACTIONS FROM "actionBlend.js"  
export function blendingReducer(state,action){
    switch (action.type) {
        case TYPES_BLEND.READ_ALL_DATA:{
            return {
                    ...state,
                     products: action.payload.map((data)=>data),
                    }
        }
        case TYPES_BLEND.NO_DATA_FOUND:{
            return console.log("Sorry, data no found");
        }
        case TYPES_BLEND.ADD_TO_BLEND:{
            let newItem = state.products.find((product) => product.id === action.payload);
           //console.log(newItem);
            let itemInBlend = state.blendCart.find(item=> item.id===newItem.id)
            if (state.full){ 
                console.log("it's full")
            }
           // check if already have this item
            if (itemInBlend){
                already();
                console.log("Este producto ya forma parte del blend")
                return { ...state }
            }else{
                console.log("Nuevo prodcuto añadido")
                return { 
                        ...state,
                        blendCart: [...state.blendCart, 
                        {...newItem,quantity:1}]}
            }  
        }
        case TYPES_BLEND.REMOVE_FROM_BLEND:{
            return {
                    ...state,
                    blendCart: state.blendCart.filter((item) => item.id !== action.payload)
        }}
        case TYPES_BLEND.FULL:
            if(action.payload)
             tooMuch();
            return { ...state} 
        case TYPES_BLEND.CLEAR_BLEND:{ 
            return blendingInitialState;
        }
        default: return state;
    }
}
