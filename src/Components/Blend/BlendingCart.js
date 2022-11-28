import React, { useReducer, useEffect, useState} from 'react';
import { TYPES_BLEND } from './actionBlend';
import { blendingReducer, blendingInitialState } from './blendReducer';
import { BlendItem } from './BlendItem';
import ProductBlend from './ProductBlend';
import { getIni } from './blendReducer';
import  selection from '../Services/selection.json'
import  ModalBlend  from './ModalBlend';


// import axios from 'axios';
// import api from '../Services/api';



const BlendingCart = () => {

const [initial, setInitial] = useState([])
const [quantity, setQuantity] = useState(-1)
const [distribution, setDistribution] = useState(-1)
const [full, setFull] = useState(false)
const [myblend, setMyblend] = useState ([])

const handleQuantity = (e) =>{
  let data = Number(e.target.value)
  setQuantity(data);
  //console.log(data)
}

const handleDistribution = (e) =>{
  let data = Number(e.target.value)
  setDistribution(data);
  //console.log(data)
}


useEffect(() => {
    getIni(setInitial); 
}, [])

blendingInitialState.products=initial;

    const [state, dispatch] = useReducer(
        blendingReducer,
        blendingInitialState
    );
  
    const {products, blendCart} = state;

    const addToBlend = (id, isfull) => {
      
     
      console.log(quantity+2)
      console.log(full)
      let count = (distribution+2)
      console.log(count)
      //const cartFull = Number(distribution + 2);
      if (state.blendCart.length === (quantity+2)){
          isfull=true;
          setFull(isfull)
          dispatch({type: TYPES_BLEND.FULL, payload:isfull})

          
      }
    
      if (isfull===true){
       // console.log("isfull="+isfull)
          
      }else{
          dispatch ({type: TYPES_BLEND.ADD_TO_BLEND, payload:id})
           //const cartFull = distribution + 2;
           
          

      }
     
      
    
    };

    const delFromBlend = (id) => {
        console.log(id);
        //habia un {} alrededor
        dispatch({type: TYPES_BLEND.REMOVE_FROM_BLEND, payload:id});      
    };

    const clearBlend = () => {
      dispatch ({type: TYPES_BLEND.CLEAR_BLEND});
    };

const saveBlend = () =>{
  console.log(blendCart)
  setMyblend(blendCart)
}



    return (
     
     <div>

<h2>CREA TU PROPIO BLEND</h2>


<select onChange={handleQuantity} className="form-select" aria-label="Default select example">
  <option value = "-1" selected>Escoge el nº de tipos</option>
  {
    selection.map((el)=>
    <option value={el.number-2}>{el.number}</option>)
  }
</select>

{ quantity >-1 &&

  (
<select onChange={handleDistribution} className="form-select" aria-label="Default select example">
  <option value ="-1" selected>Escoge la proporción</option>
  { 
    selection[quantity].distribution.map((el,i)=> 
    <option value={i}>{el}</option>) 
  }
</select>

  )
}

{ 
    distribution===1 &&(
      <p>IMPORTANTE: si seleccionas una opción con predominancia,
        por ejemplo: 75%-25%, el primer tipo de café que elijas será
        el mayoritario.
        Ejemplo: 75-25:
        -Café Brasil = "75%"
        -Café Guatemala = "25%"
      </p>
    ) 
    }
    
    {

distribution >-1 &&
  (
<div>
    <h3>Agrega la variedad al blend</h3>
<article className='box'>
{products.map((product) => (<ProductBlend key= {product.id} data={product}
addToBlend= {addToBlend}/>
))}
</article>
<h3> BLEND </h3>
<article className='box'></article>
<button onClick={clearBlend}>Vaciar Blend</button>
{
    blendCart.map((item, index) => <BlendItem key = {index} data = {item}
    delFromBlend={delFromBlend} />)
}

</div>
  )
}


{
    state.blendCart.length === (quantity+2) &&
(
<ModalBlend saveBlend={saveBlend} />

   
)

}



<div>{myblend.map((item)=><p>{item.id}</p>)}</div>
<h1>----------------------------------</h1>
</div>


  
  
 
  );
};

export default BlendingCart;