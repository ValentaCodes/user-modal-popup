import React from 'react';
import './Card.css';
const Card = (props) => {
  return (
    <>
    {/* If we want to use a className in a custom component we must pass it as props */}
      <div className={`card ${props.className}`}>{props.children}</div>
    </>
  );
};

export default Card;
