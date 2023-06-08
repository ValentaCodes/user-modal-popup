import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './addUser.css';
import '../UI/Button/Button.css';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = (props) => {
  const [addUsername, setAddUsername] = useState('');
  const [addAge, setAddAge] = useState('');
  const [error, setError] = useState();

  const userInput = (event) => {
    setAddUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAddAge(event.target.value);
  };

  const clearState = () => {
    setAddAge('');
    setAddUsername('');
    
  };

  const errorHandler = () => {
    setError(null)
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (addUsername.trim().length === 0 || addAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }
    // Here we have to force string conversion because any input tag is automatically a string. We also initialized it in our state as an empty string and we do that by +addAge
    if (+addAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Age must be greater than 1'
      })
      return;
    }
    props.onAddUser(addUsername, addAge);
    clearState();
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} handleError={errorHandler}/>
      }
     {/* Here we are able to assign a class name 'input' because in our custom Card component we are passing 'className' as props */}
    <Card className='input'>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={addUsername}
            onChange={userInput}
            />
        </div>
        <div>
          <label htmlFor='age'>Age(Years)</label>
          <input
            type='number'
            id='age'
            value={addAge}
            onChange={ageChangeHandler}
            />
          <Button onClick={addUserHandler}>Add User</Button>
        </div>
      </form>
    </Card>
            </div>
  );
};

export default AddUser;
