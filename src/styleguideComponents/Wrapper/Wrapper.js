import React from 'react';
import './Wrapper.scss';

export const Wrapper = props => {
  return (
    <div className="Wrapper">
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  );
};

export default Wrapper;
