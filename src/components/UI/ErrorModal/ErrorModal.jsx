import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './ErrorModal.css';
import { motion } from 'framer-motion';
const ErrorModal = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 2, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className='backdrop' onClick={props.handleError} />
      <Card className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'>
          <Button onClick={props.handleError}>Okay</Button>
        </footer>
      </Card>
    </motion.div>
  );
};

export default ErrorModal;
