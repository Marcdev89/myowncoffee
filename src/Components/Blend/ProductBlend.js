const ProductBlend = ({data,addToBlend}) => {
 
    let {id, name, price}=data;
       return (
       <div>
           <h4>{name}</h4>
           <h5>{price}€</h5>
           <button onClick={()=> addToBlend(id)}>Agregar</button>
           <h5>-----------------------------------------</h5>
   
   
   
   
       </div>
     )
   }
   
   export default ProductBlend;