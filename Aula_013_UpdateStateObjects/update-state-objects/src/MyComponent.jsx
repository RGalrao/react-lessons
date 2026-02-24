import { useState } from "react";

export default function MyComponent(){
  const [car, setCar] = useState({
    year: 2025,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event){
                // ... (spread operator) to get all the current properties of the car and update the year
    setCar(c => ({...car, year: event.target.value}));
        // updater function for safe updates 
  }          // enclose with () to prevent multiline statement and create JS object
  function handleMakeChange(event){
    setCar(c => ({...car, make: event.target.value}));
  }
  function handleModelChange(event){
    setCar(c => ({...car, model: event.target.value}));
  }

  return(
  <div>
    <h1>Set your favorite Car</h1>
    <label>Year: </label>
    <input type="number" value={car.year} onChange={handleYearChange}/>
    <br /><br />    
    <label>Make: </label>
    <input type="text" value={car.make} onChange={handleMakeChange}/>
    <br /><br />
    <label>Model: </label>
    <input type="text" value={car.model} onChange={handleModelChange}/>
    <br />
    <p>Your favorite car is a {car.year} {car.make} {car.model}.</p>
  </div>
  );
}