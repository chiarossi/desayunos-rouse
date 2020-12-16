import ProdDesayuno from "./ProdDesayuno";
import "./menu.css";

const ItemContainer = () => {
    return (
        <section className="featuredProd">
          <div className = "container">
            <h2>Desayunos destacados</h2>
              <ul>
                <li><ProdDesayuno titulo="Desayuno 1" precio="1500"/></li>
                <li><ProdDesayuno titulo="Desayuno 2" precio="1700"/></li>
                <li><ProdDesayuno titulo="Desayuno 3" precio="1900"/></li>
                <li><ProdDesayuno titulo="Desayuno 4" precio="2100"/></li>
                <li><ProdDesayuno titulo="Desayuno 5" precio="2300"/></li>
                <li><ProdDesayuno titulo="Desayuno 6" precio="2500"/></li>
              </ul>           
          </div>
        </section>
        
      )
    }
export default ItemContainer;