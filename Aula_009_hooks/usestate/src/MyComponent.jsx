// to use a react hook we need to import it
import React, {useState} from "react";

function MyComponent() {
  // create stateful variable and setter function
  // let [name, setName] = useState();
  // const updateName = () => {
  //   name = "Rodrigo";
  //   console.log(name);
  // }
  // only prints on the console

  const [name, setName] = useState("GUEST"); // We can set a default parameter "GUEST"
  const [age, setAge] = useState(0); 
  const [isEmployed, setIsEmployed] = useState(false); 

  const updateName = () => {
    setName("Rodrigo");
  }
  // rerenders virtual Dom

  //increase numbers
  const incrementAge = () => {
    setAge(age + 1);
  }

  // toggle boolean
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Change Employment</button>
    </div>
  )

}

export default MyComponent