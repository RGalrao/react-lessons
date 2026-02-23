
function ProfilePic(){

  const imageURL = './src/assets/logo6r.svg';

  const handleClick = (e) => e.target.style.display = "none";

  return (
    <img onClick={(e) => handleClick(e)} src={imageURL} alt="" />
  );
}

export default ProfilePic