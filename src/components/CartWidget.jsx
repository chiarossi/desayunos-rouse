import Carrito from "../multimedia/carrito.svg";


function CartWidget() {
    return (
      <div className = "container">
        <h3 className = "textoCarrito">Carrito</h3>
        <img src={Carrito} alt="carrito" className = "svgcarrito"/>
      </div>
    );
  }
  
  export default CartWidget;