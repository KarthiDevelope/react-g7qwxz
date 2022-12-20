import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import Sample from './Sample';

const First = () => {
  return (
    <div className="ui comments">
      <Single />
      <Single />
      <Single />
    </div>
  );
};

//Display Using Id

ReactDom.render(<First />, document.querySelector('#root'));
