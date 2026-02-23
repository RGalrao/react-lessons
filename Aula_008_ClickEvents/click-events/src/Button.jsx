
function Button (){
  
  //1 - const handleClick = () => console.log("Stop clicking");
  //    when there is a click on the button, do this 


  //2 - const handleClickParam = (name) => console.log(`${name} stop clicking`)

  let count = 0;

  const handleClick = (name) => {
     // if we have more than 1 line of code in the function we need {}
    if(count < 3){
      count++;
      console.log(`${name}, you clicked me ${count} times`);
    }
    else {
      console.log(`${name} stop clicking`)
  }

  };


  return(
    //1 - <button onClick={handleClick}>Click Me</button>
                  // add arrow function to prevent calling right away when we have arguments
    //2 - <button onClick={() => handleClickParam("Ro")}>Click Me</button>
    <button onClick={() => handleClick("Ro")}>Click Me</button>
  );
}

export default Button