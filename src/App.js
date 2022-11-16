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
    {foods.map((food) => 
      <div key={uuidv4()}>
  <p>{food.name}</p>
  <img src={food.image} width={50} />
</div> )}
<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
</div>
  );
}

export default App;
