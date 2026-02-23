import profilePic from "./assets/me.jpg"

function Card () {

  return(
    <div className="card">
      <img src={profilePic} alt="image" className="cardImg"/>
      <h2 className="card-title">Rodrigo</h2>
      <p>I study Web Dev</p>
    </div>
  );
}

export default Card