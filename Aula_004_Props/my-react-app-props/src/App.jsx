
// Props are read only properties that are shared between components 
// a Parent Component can send data to a Child component
// <Component key=value />
// ex: Create diferent and unique Cards


// PropTypes are a mechanism that ensures that the passed value is the correct data type
// age: PropTypes.number
// if working with props, it is good practice to use proptypes

// dafalutProps - default values for props in case they are not passed from the parent component
// name: "Guest"

import Student from "./Student.jsx"

function App() {
  
  return (
    <>
      <Student name="Rodrigo" age={30} isStudent={true}/>
      <Student name="Débora" age={28} isStudent={false}/>
      <Student name="Carla" age={52} isStudent={false}/>
      <Student name="Bárbara" age={18} isStudent={true}/>
      <Student/>
    </>
  )
}

export default App
