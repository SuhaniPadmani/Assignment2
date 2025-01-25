import React from "react";

function UserProfile({name, age, location, bio}) {
    return (
      <>
          <div>
          Name : {name} 
          <br />
          Age : {age}
          <br />
              Location: {location}
              <br/>
              Bio : {bio}
          </div>    
      </>
    )
  }
  export default UserProfile;