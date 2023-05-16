import React, {useState} from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './addUser.css'
import '../UI/Button/Button.css'

const AddUser = (props) => {
    const [addUsername, setAddUsername] = useState('');
    const [addAge, setAddAge] = useState('')

    const userInput = (event) => {
      setAddUsername(event.target.value)
    };

    // const invalidAge = () => {
    //   return <></>
    // }
    const ageChangeHandler = (event) => {
      setAddAge(event.target.value)

      if (addAge < 1) {
        alert('Age cannot be less than 1')
        setAddAge('')
        return
      }

    }
    const clearState = () => {
      setAddAge('')
      setAddUsername('')
    }

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log({age: addAge,username: addUsername})
    clearState();
  };

  return (
    // Here we are able to assign a class name 'input' because in our Card component we are passing 'className' as props
    <Card className='input'>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' value={addUsername} onChange={userInput}/>
        </div>
        <div>
          <label htmlFor='age'>Age(Years)</label>
          <input type='number' id='age' value={addAge} onChange={ageChangeHandler} />
          <Button onClick={addUserHandler}>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
