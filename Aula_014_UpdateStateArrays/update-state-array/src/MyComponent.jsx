import { useState } from "react"

export default function MyComponent(){
  // define array
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood(){
    // to get value inside input
    const newFood = document.getElementById("foodInput").value;
    // to clear input onclick
    document.getElementById("foodInput").value = "";
    
    // to update array
    // setFoods([...foods, newFood]);
    // with updater function:
    setFoods(f => [...f, newFood]);
  }

  function handleRemoveFood(index){
    setFoods(foods.filter((_, i) => i !== index));
  }

  return(
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter new food"/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  )

}