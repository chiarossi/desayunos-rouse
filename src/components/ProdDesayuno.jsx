import "./menu.css";
import { useState } from "react";

const ProdDesayuno = ({titulo, precio}) => {
    const [qty, setQty] = useState(1);

    const handleClickResta = () => {
        if(qty > 1) {
            setQty(qty - 1);
        }
    }

    const onAdd = () => {
        alert(`Agregaste ${qty} productos al carrito`);
    }

    return (
        <article className="prodDesayuno">
            <img src="https://placehold.it/300x300" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <div className="qty">
                    <button 
                        disabled={qty === 1 ? 'disabled' : null } 
                        onClick={handleClickResta}
                    >
                        -
                    </button>
                    <input type="text" value={qty} readOnly/>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <p>${precio}</p>

                <button onClick={onAdd}>Agregar al carrito</button>
               
            </div>
        </article>
    )
}

export default ProdDesayuno;