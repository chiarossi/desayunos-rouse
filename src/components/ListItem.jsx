import "./menu.css"
import "./bootstrap.css"
import "./bootstrap.min.css"
function ListItem() {
  const mensaje = () => {
    alert ("Lista de Desayunos");
  }
    return (
      <div>
        <button onClick={mensaje} className = "botonLista"><h3>Lista:</h3></button>
      </div>
      
    );
  }
  
  export default ListItem;