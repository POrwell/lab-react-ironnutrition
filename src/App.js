import { useState } from 'react';
import './App.css';
import foodsJSON from "./foods.json";
import {v4 as uuidv4} from "uuid";

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  return (
    <div className="App">
      <h1>Food List</h1>
    {foods.map((food) => 
      <div key={uuidv4()}>
  <p>{food.name}</p>
  <img src={food.image} width={50} />
</div> )}
</div>
  );
}

export default App;
