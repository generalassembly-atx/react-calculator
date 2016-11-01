import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//
// Restricts any input besides Numbers on the text fields :)
//
let inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
  });
};
