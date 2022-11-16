import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({foods, setFoods})  {
    const [newName, setNewName] = useState("")
    const [newImage, setnewImage] = useState("")
    const [newCalories, setnewCalories] = useState(0)
    const [newServings, setnewServings] = useState(0)
    
    const handleSubmit = event => {
    event.preventDefault()
    setFoods([{
        name: newName,
        image: newImage,
        calories: newCalories,
        servings: newServings
    },...foods])
    setNewName("")
    setnewImage("")
    setnewCalories(0)
    setnewServings(0)
    }
  
    return (

    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newName} type="text" onChange={event => setNewName(event.target.value)} />

      <label>Image</label>
      <Input value={newImage} type="text" onChange={event => setnewImage(event.target.value)}/>

      <label>Calories</label>
      <Input value={newCalories} type="number" onChange={event => setnewCalories(parseInt(event.target.value))}/>

      <label>Servings</label>
      <Input value={newServings} type="number" onChange={event => setnewServings(parseInt(event.target.value))}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;