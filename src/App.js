import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

const [usersList, setUsersList] = useState([])

const addUserHandler = (username, userAge) => {
  setUsersList((prevUserList) => {
    return [...prevUserList, {name: username, age: userAge, id: Math.random(Math.ceil() * 1).toString()}]
  })
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
