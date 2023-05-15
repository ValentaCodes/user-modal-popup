import React from 'react';
import Card from '../UI/Card/Card';
import './addUser.css'

const AddUser = (props) => {
  //   const [addUser, setAddUser] = useState('');
  //   const userInput = (event) => {

  //   };

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={'input'}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
        </div>
        <div>
          <label htmlFor='age'>Age(Years)</label>
          <input type='number' id='age' />
          <button type='submit'>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
