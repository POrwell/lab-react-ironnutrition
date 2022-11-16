import { useState } from 'react';
import './App.css';
import foodsJSON from "./foods.json";
import {v4 as uuidv4} from "uuid";
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  return (
    <div className="App">
      <div className="AddFoodForm">
     <AddFoodForm foods={foods} setFoods={setFoods}/> 
     </div>
     <h2>Food List</h2>
      <div className="Foodbox">
    {foods.map((food) => 
    <FoodBox key={uuidv4()} food={food} />
)}
</div>
</div>
  );
}

export default App;
