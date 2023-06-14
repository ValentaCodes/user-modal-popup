import React from 'react';
import ReactDom from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';
import './ErrorModal.css';
import { motion } from 'framer-motion';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.handleError} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};
const ErrorModal = (props) => {
  return (
    <>
    {/* This will port the following components to public/index.html. Portals are used to */}
      {ReactDom.createPortal(
        <Backdrop onClick={props.handleError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(<ModalOverlay onClick={props.handleError} title={props.title} message={props.message}/>, document.getElementById('overlay-root'))}
    </>
  );
};

export default ErrorModal;
