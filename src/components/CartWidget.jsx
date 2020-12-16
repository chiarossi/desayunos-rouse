import Carrito from "../multimedia/carrito.svg";


const CartWidget = ({action}) => {
    return (
      <div className = "container" onClick={action}>
        <h3 className = "textoCarrito">Carrito</h3>
        <img src={Carrito} alt="carrito" className = "svgcarrito"/>
        <span>0</span>
      </div>
    ); 
  }
  
  export default CartWidget;
