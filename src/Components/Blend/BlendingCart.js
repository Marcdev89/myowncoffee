import React, { useReducer, useEffect, useState, useContext} from 'react';
import { TYPES_BLEND } from './actionBlend';
import { blendingReducer, blendingInitialState } from './blendReducer';
import { BlendItem } from './BlendItem';
import ProductBlend from './ProductBlend';
import { getIni } from './blendReducer';
import  selection from '../Services/selection.json'
import  ModalBlend  from './ModalBlend';
import LoginContext from '../Login/loginContext';
import api from '../Services/api';
import { Container, Row, Col } from 'react-bootstrap';
import './blending.css'
import Button from 'react-bootstrap/Button';
import Step from '../Step';
import Title from './Title';



const BlendingCart = () => {

  const {idCustomer} = useContext(LoginContext);

  const [initial, setInitial] = useState([])
  const [quantity, setQuantity] = useState(-1)
  const [distribution, setDistribution] = useState(-1)
  const [full, setFull] = useState(false)
  const [myblend, setMyblend] = useState ([])
  const [radio, setRadio] = useState(3);
  const [details, setDetails] = useState([]);
  const [percent, setPercent]= useState("0%");
  
  const text = 'CREA TU PROPIO BLEND';

//handler of quantity of coffees (2-4)
const handleQuantity = (e) =>{
  let data = Number(e.target.value)
  setQuantity(data);
  //console.log(data)
  setPercent("25%")
}
//distribution handler
const handleDistribution = (e) =>{
  let data = Number(e.target.value)
  setDistribution(data);
  //console.log(data)
  setPercent("50%")
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
  if (state.blendCart.length === (quantity+2)){
      isfull=true;
      setFull(isfull)
      dispatch({type: TYPES_BLEND.FULL, payload:isfull})
  }
  if (isfull===true){
     console.log(full)      
  }else{
      dispatch ({type: TYPES_BLEND.ADD_TO_BLEND, payload:id})
  }};

//detele item from blend container
const delFromBlend = (id) => {
   //console.log(id);
    dispatch({type: TYPES_BLEND.REMOVE_FROM_BLEND, payload:id}); 
    setPercent("50%")     
    };

const clearBlend = () => {
    dispatch ({type: TYPES_BLEND.CLEAR_BLEND});
    setPercent("50%")  
    };

const saveBlend = () =>{
    setMyblend(blendCart)   
    setPercent("75%")
    console.log(blendCart)
  }
//function to send data from blend to database - myblends table
const blendDb = (e) =>{
        //all_prices/all_items
        let totalPrice=
        blendCart.map(e=>Number(e.price)).reduce((prev,curr)=>prev+curr,0)
        totalPrice/=blendCart.length;
        totalPrice=totalPrice.toFixed(2);

        let data = {
          customer: idCustomer,
          price: totalPrice,
          size:radio
        }

    fetch(api.newBlendInsert,{
      method:"POST",
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then((dataRes)=>{
      console.log(dataRes);
    })
    .catch(console.log);
}

      //adding product and idcustomer on details state
const myblendDetail = () =>{
    blendCart.map((e)=>
      setDetails(current => [...current, {
        product: e.id,
        customer: idCustomer}]
      ))
      console.log(details);
}

//function to send details from blend to database - myblends_details table
const sendDetails = () =>{
    details.map((e)=> 
    fetch(api.myblendInsert,{
      method:"POST",
      body:JSON.stringify(e)
    })
    .then(res=>res.json())
    .then((dataRes)=>{
      console.log(dataRes);
    })
    .catch(console.log)
    )
}
//select the blend's size
const handleRadio=(e)=>{
      let selected = e.target.value;
      //console.log(blendCart)
      setRadio(selected);
      //console.log(radio)
     }

     //if we cancel blend
     const cancelBlend = () =>{
      setDetails([]);
     }

  return (
     
     <Container fluid className='make-blend-page' >
                                                {/* Title and image */}  
      <Title text={text} img={'cafe_mix'} />
                                                {/* Progress bar */}
        <Step percent={percent}/>
                                                {/* Container with selects */}
          <Container  className='select-container'>   
            <div className='select-containerdiv'>
              <select onChange={handleQuantity} className="form-select form-select-sm select-style" aria-label="">
                <option value = "-1" selected>Escoge el nº de tipos</option>
                {
                  selection.map((el)=>
                  <option value={el.number-2}>{el.number}</option>)
                }
              </select>

              { quantity >-1 &&

              (
              <select onChange={handleDistribution} className="form-select form-select-sm select-style" aria-label="Default select example">
                <option value ="-1" selected>Escoge la proporción</option>
              { 
                selection[quantity].distribution.map((el,i)=> 
                <option value={i}>{el}</option>) 
              }
              </select>

              )
              }

            </div>
          </Container>
          { 
          distribution===1 &&(
            <p><b>IMPORTANTE:</b>  <br></br>
              Si seleccionas una opción con predominancia,
              por ejemplo: 75%-25%, <b> el primer tipo de café que elijas será
              el mayoritario. </b> <br></br>
              Ejemplo: 75-25:
              -Café Brasil = "75%"
              -Café Guatemala = "25%"
            </p>
          ) 
          }
    
          {
          distribution >-1 &&
          (
            <div className='container-products'>
              <h3>Agrega la variedad al blend</h3>
                                {/* grid card (products) */}
          <Row fluid xs={1} md={3} xl={4} className="g-4 row-card">
            {products.map((product) => (<Col  className='col-card'>
                              <ProductBlend key= {product.id} data={product}
                               addToBlend= {addToBlend}/> </Col> 
                              ))}
          </Row>
                              {/* Container with blending box */}  
          <Container fluid="bg" className='blend-box' fixed="bottom">
            <h3> BLEND </h3>
              <Button variant='dark' onClick={clearBlend}>Vaciar Blend</Button>
                <br></br>
                  <br></br>
                    <Row fluid xs={2} md={4} className="g-4 row-card">
                    {
                      blendCart.map((item, index) => (<Col  className='col-card'>
                                      <BlendItem key = {index} data = {item}
                                      delFromBlend={delFromBlend} /> </Col>) ) 
                                      }
                      </Row>
                        <br></br>
                    {
                    state.blendCart.length === (quantity+2) && 
                    (
                    <ModalBlend cancelBlend={cancelBlend} saveBlend={saveBlend} blendDb={blendDb} sendDetails={sendDetails} myblendDetail={myblendDetail} handleRadio={handleRadio} />
                    )
                    }
          </Container>
          </div>
          )
          }
    </Container> 
  );
};

export default BlendingCart;