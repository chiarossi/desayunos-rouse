import "./menu.css"
import ItemContainer from "./ItemContainer"
function ListItem() {
  const mensaje = () => {
    alert ("Lista de Desayunos");
  }
    return (
      <div className = "container-fluid">
        <div>
          <ItemContainer />
        </div>
      </div>

      
    );
  }
  
  export default ListItem;