import React, { useState, useRef } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './addUser.css';
import '../UI/Button/Button.css';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = (props) => {
  // we can use ref to
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    // Here we force string conversion because any input tag is automatically a string. We also initialized it in our state as an empty string and we do that by +addAge
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Age must be greater than 1',
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    // YOU SHOULD NEVER MANIPULATE DOM elements, Rarely use refs to manipulate the DOM
    // Below is only okay because we are clearing an input
    // refs are great to read values
    // If you access values using refs, most commonly forms/inputs = uncontrolled components
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // Should always utilize useState
    // clearState();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleError={errorHandler}
        />
      )}
      {/* Here we are able to assign a class name 'input' because in our custom Card component we are passing 'className' as props */}
      <Card className='input'>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              // NOTE: Instead of using value and onchange prop we can track the dom element with useRef()
              // value={addUsername}
              // onChange={userInput}
              ref={nameInputRef}

              
            />
          </div>
          <div>
            <label htmlFor='age'>Age(Years)</label>
            <input
              type='number'
              id='age'
              // See note above
              ref={ageInputRef}
            />
            <Button onClick={addUserHandler}>Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
