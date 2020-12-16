import React from "react"; 
import './App.css';
import NavBar from "./components/NavBar";
import ListItem from "./components/ListItem";
import "./components/bootstrap.css"
import "./components/bootstrap.min.css"

function App() {
  return (
    <div>
      <NavBar />
      <ListItem />  
    </div>
  );
}

export default App;
