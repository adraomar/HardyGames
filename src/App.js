import './App.css';
import { useState, useEffect } from "react";
import RoutesMap from './components/RoutesMap/RoutesMap';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productos = [];

    fetch("https://api.rawg.io/api/games?key=15c0ed5bc35d476baecf48a6c8529477")
      .then(dataJson => dataJson.json())
      .then(data => {
        productos = data.results;
      })

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3500);
    }).then((data) => {
      setItems(data);
    })
  }, [])

  return (
    <RoutesMap items={ items }/>
  );
}

export default App;
