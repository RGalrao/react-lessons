
// UPDATER FUNCTIONS - A function passed as an argument to setState() (usually)
//                     ex. setYear(y => y +1)
//                     Allow for safe updates based on previous states
//                     Used with multiple state updates and async functions
//                     Good practice to be used whenever possible 



import { useState } from "react"


function Counter(){
  const [count, setCount] = useState(0);

  const increment = () => {
    // REACT batches together state updates for performance reasons:

    // setCount (count + 1);
    // setCount (count + 1);
    // setCount (count + 1);
    // Update only in the end 

    setCount (c => c + 1);
    setCount (c => c + 1);
    // React puts updater function on a queue and will call them IN ORDER

  };

  const decrement = () => setCount (c => c - 1);

  //if there were to be more than one line we enclose in {}
  const reset = () => {
    setCount (0);
    // no need to use updater function as we are only setting the value to 0
  }

  return(
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter