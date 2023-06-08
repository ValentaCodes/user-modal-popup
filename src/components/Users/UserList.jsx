import React from 'react';
// import UserListItem from './UserListItem'
import Card from '../UI/Card/Card';
import './UserList.css'
const UserList = (props) => {
  return (
    <Card className='userList'>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
