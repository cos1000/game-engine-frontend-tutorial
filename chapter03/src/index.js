import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TestingComponent } from './testing';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

const myFirstElement = <h1>Hello React!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
// Show: Hello React!

let myElement = React.createElement('h1', {}, 'I do not use JSX!');
root.render(myElement);
// Show: I do not use JSX!

const x = 5;
myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
root.render(myElement);
// Show: Hello

root.render(<TestingComponent color="blue" updatedColor="red" />); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
