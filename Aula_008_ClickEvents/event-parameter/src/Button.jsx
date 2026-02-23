
function Button (){

  // const handleClick = (e) => console.log(e); will console log properties from the event that we can target:
  const handleClick = (e) => e.target.textContent = "Ouch";
  
    //return (<button onDoubleClick={(e) => handleClick(e)}>Click Me</button>);
    return (<button onClick={(e) => handleClick(e)}>Click Me</button>);
}

export default Button