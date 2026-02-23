import PropTypes from 'prop-types';

function UserGreeting(props){

  // if(props.isLoggedIn){
  //   return <h2>Welcome {props.username}</h2>
  // }
  // else{
  //   return <h2>Please login to continue</h2>
  // }

  // return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2> : <h2 className="login-msg">Please login to continue</h2>)
    
  const welcomeMessage = <h2 className="welcome-msg">Welcome {props.username}</h2>
  const loginMessage = <h2 className="login-msg">Please login to continue</h2>

  return(props.isLoggedIn ? welcomeMessage : loginMessage)
}


UserGreeting.prototypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}


  export default UserGreeting