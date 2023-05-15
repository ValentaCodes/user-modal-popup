import React from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './addUser.css'
import '../UI/Button/Button.css'

const AddUser = (props) => {
  //   const [addUser, setAddUser] = useState('');
  //   const userInput = (event) => {

  //   };

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    // Here we are able to assign a class name 'input' because in our Card component we are passing 'className' as props
    <Card className='input'>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
        </div>
        <div>
          <label htmlFor='age'>Age(Years)</label>
          <input type='number' id='age' />
          <Button onClick={console.log('clicked')}>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
