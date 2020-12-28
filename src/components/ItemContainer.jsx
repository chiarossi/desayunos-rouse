import ProdDesayuno from "./ProdDesayuno";
import "./menu.css";
import "./ItemCount";
import {useState, useEffect} from 'react';

const ItemContainer = () => {
  const [items, setItems] = useState([]);  
  const products = [
      {
        id: 1,
        titulo: "Desayuno 1",
        precio: 1500,
      },
      {
        id: 2,
        titulo: "Desayuno 2",
        precio: 1700,
      },
      {
        id: 3,
        titulo: "Desayuno 3",
        precio: 1900,
      },
      {
        id: 4,
        titulo: "Desayuno 4",
        precio: 2100,
      },
      {
        id: 5,
        titulo: "Desayuno 5",
        precio: 2300,
      },
      {
        id: 6,
        titulo: "Desayuno 6",
        precio: 2500,
      },
    ]
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() =>{
          resolve(products)
        }, 1000)
    })
    const getProducstFromDB = async () => {
      try {
          const result = await getProducts;
          setItems(result);
      } catch(error) {
          alert('No podemos mostrar los productos en este momento');
      }
  }

  useEffect(() => {
      getProducstFromDB();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
        <section className="featuredProd">
          <div className = "container">
          {
                    items.length ?
                    <>
                        <h2>Desayunos destacados</h2>

                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <ProdDesayuno 
                                            titulo={item.titulo} 
                                            precio={item.precio} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p>Cargando items...</p>
                }           
          </div>
        </section>
        
      )
    }
export default ItemContainer;