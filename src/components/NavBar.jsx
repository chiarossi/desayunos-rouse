import './menu.css';
import CartWidget from "./CartWidget";

import "./WidgetCart"

function NavBar({titulo, action}) {
  return (
    <>
    <div>
        <h1 className = "titulo">{titulo}Desayunos Rouse</h1>
      <div  className = "container-fluid">
        <div className = "row">
          <div className = "col-sm-10">
          <nav class="menuppal">
              <ul>Nuestros productos:
                <li><a href = "#">Desayunos para Niños</a></li>
                <li><a href = "#">Desayunos para Adultos</a></li>
                <li><a href = "#">Desayunos Grandes</a></li>
                <li><a href = "#">Desayunos Medianos</a></li>
              </ul>
              </nav>
          </div>
          <div className = "col-sm-2">
            <CartWidget action={action} />
          
          </div>  
        </div>  
      </div>
    </div> 
    </>
  );
}

export default NavBar;