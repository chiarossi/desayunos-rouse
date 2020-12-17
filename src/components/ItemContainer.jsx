import ProdDesayuno from "./ProdDesayuno";
import "./menu.css";
import "./ItemCount";
import Contador from "./ItemCount.jsx";
import { useState } from "react";



const ItemContainer = () => {
    const [count, setCount] = useState(0);
    const qty1 = 7;

    const addMore = () => {
      if(count < qty1)  {
      setCount(count + 1);
      }
    }
    const lessMore = () => {
      if(count === 0) return;

      setCount(count - 1);
    }
    return (
        <section className="featuredProd">
          <div className = "container">
            <h2>Desayunos destacados</h2>
              <ul>
                <li><ProdDesayuno titulo="Desayuno 1" precio="1500"/></li>
                <Contador 
                count={count}
                
                addMore={addMore}
                lessMore={lessMore}
                />
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