import { useState } from 'react';
import './App.css';
import foodsJSON from "./foods.json";
import {v4 as uuidv4} from "uuid";
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import Toggle from './components/Toggle';

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  const [query, setQuery] = useState("");
 
  
  return (
    <div className="App">
      <Toggle>
      <div className="AddFoodForm">
     <AddFoodForm foods={foods} setFoods={setFoods}/> 
     </div>
   </Toggle>
     <div className='Search'>
     <Search query={query} setQuery={setQuery}/>
     </div>
     <h2>Food List</h2>
      <div className="Foodbox">
    {foods.filter((food) => food.name.toLowerCase().includes(query.toLowerCase())).map((food) => 
    <FoodBox key={uuidv4()} food={food} foods={foods} setFoods={setFoods}/>
)}
</div>
</div>
  );
}

export default App;
