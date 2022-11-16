import { useState } from 'react';
import './App.css';
import foodsJSON from "./foods.json";
import {v4 as uuidv4} from "uuid";
import FoodBox from './components/Foodbox';

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  return (
    <div className="App">
      <h1>Food List</h1>
      <div className="Foodbox">
    {foods.map((food) => 
    <FoodBox key={uuidv4()} food={food} />
)}
</div>
</div>
  );
}

export default App;
