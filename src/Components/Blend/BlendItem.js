export const BlendItem = ({data, delFromBlend}) => {
    let { id, name, price, quantity}=data;
  return (
    <div>
        <h7>{name} </h7>
        <h8>{price} € x {quantity} = ${price * quantity} </h8>
        <button onClick={()=>delFromBlend(id)}>Eliminar</button>
        <br/>
        </div>
  )
}