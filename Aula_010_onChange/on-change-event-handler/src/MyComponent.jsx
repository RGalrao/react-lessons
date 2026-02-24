// onChange - IS AN EVENT HANDLER  used PRIMARILY with FORM elements
//            (ex - input, textarea, select, radio)
//            Triggers a function every time the value of the input changes

import { useState } from "react";

function MyComponent (){

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");


  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }


  return(
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>
      <br />
      <input type="number" value={quantity} onChange={handleQuantityChange}/>
      <p>Quantity: {quantity}</p>
      <br />
      <textarea value={comment} onChange={handleCommentChange} placeholder="Leave a comment here"></textarea>
      <p>Comment: {comment}</p>
      <br />
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Paypal">Paypal</option>
      </select>
      <p>Payment method: {payment}</p>
      <br />
      <label>
        <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
        Pickup
      </label>
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping method: {shipping}</p>

    </div>    
  );

}

export default MyComponent