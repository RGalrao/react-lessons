
function List(){

  const fruits = [
    {id:1, name: "apple", calories: 95}, 
    {id:2, name: "orange", calories: 45}, 
    {id:3, name: "banana", calories: 105}, 
    {id:4, name: "coconut", calories: 159}, 
    {id:5, name: "pineapple", calories: 37},
    ];

  // SORTING LISTS

  // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Sort by Alphabetical order
  // fruits.sort((a,b) => b.name.localeCompare(a.name)); // Sort by REVERSE Alphabetical order
  // fruits.sort((a,b) => a.calories - b.calories); // Sort by Numeric order
  // fruits.sort((a,b) => b.calories - a.calories); // Sort by Numeric order
  
   const listItems = fruits.map(fruit => <li key={fruit.id}>
                                          {fruit.name}: &nbsp;
                                          <b>{fruit.calories}</b></li>);



  //Filter by criteria 
  
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
  //                                                   {lowCalFruit.name}: &nbsp;
  //                                                   <b>{lowCalFruit.calories}</b></li>);


  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
  //                                                   {highCalFruit.name}: &nbsp;
  //                                                   <b>{highCalFruit.calories}</b></li>);
                                         


  return (<ul>{listItems}</ul>);

}

export default List