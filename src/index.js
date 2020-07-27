import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// const element = React.createElement('div',null,'hello how are you');

/* const list = React.createElement('ol',null,React.createElement('li',null,'Apple'),
  React.createElement('li',{id:'Mango'},'Mango'),React.createElement('li',null,'Banana'),)*/

const people = [
  {name: 'ankush'},
  {name: 'bhanu'},
  {name: 'bholu'}
]

/*const listfromarray = React.createElement('ol',null,
people.map(person =>React.createElement('li',{key: person.name},person.name)))*/


ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App /> */}

  // </React.StrictMode>,

  listfromarray,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
