import React from "react"; 
import './App.css';
import NavBar from "./components/NavBar";
import ListItem from "./components/ListItem";
import "./components/bootstrap.css"
import "./components/bootstrap.min.css"

function App() {
  const cartelSeleccion = () => {
    alert("Te redirigiremos a la pagina solicitada");
  }
  return (
    <div>
      <NavBar action={cartelSeleccion} />
      <ListItem />  
    </div>
  );
}

export default App;
