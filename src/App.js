import React from 'react';
import UserProfile from './UserProfile';

function App() {

  const userData = {
    name: 'Suhani',
    age: 20,
    location: 'Surat',
    bio: "About React Props" 
  }

  return (
    <>
      <div>
        <UserProfile name={userData.name} age={userData.age} location={userData.location} bio={userData.bio} />
      </div>
    </>
  );
}

export default App;
