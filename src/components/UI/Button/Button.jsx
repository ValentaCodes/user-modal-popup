import React from 'react';
import './Button.css';

// NOTE: This is a custom button component
const Button = (props) => {
  return (
    <>
      <button
        className='user-button'
        // creates a fallback if type isnt assigned when used apply button type
        type={props.type || 'button'}
        // forwards the onClick function
        onClick={props.onClick}
      >
        {/* This will render whatever the user sets when using component */}
        {props.children}
      </button>
    </>
  );
};

export default Button;
