import React from 'react';

const button =  (props) => (
  <button
    onClick={props.clicked}
    className={[classes.Button, classes[props.buttonType]].join(' ')}
  >
    {props.children}
  </button>
);

export default button;