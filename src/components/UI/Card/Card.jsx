import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='card-contents'>
        {props.children}
      </div>
    </div>
  )
}

export default Card