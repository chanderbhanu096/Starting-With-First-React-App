import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import * as serviceWorker from "./serviceWorker";
//import React, { Component } from 'react';
//class ContactList extends Component {}
/* Above two lines are the alternate for the
  class ContactList extends React.Component {}
  Option for the that option one doesn't need to import*/

// Rendering class/ component
class ContactList extends React.Component {
  render() {
    const people = [{ name: "ankush" }, { name: "bhanu" }, { name: "bholu" }];

    return (
      <ol>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}
// const element = React.createElement('div',null,'hello how are you');

/* const list = React.createElement('ol',null,React.createElement('li',null,'Apple'),
  React.createElement('li',{id:'Mango'},'Mango'),React.createElement('li',null,'Banana'),) */

/* const people = [
  {name: 'ankush'},
  {name: 'bhanu'},
  {name: 'bholu'}
] */

// Using JSX
/* const element = <ol>
  {people.map((person)=>(
    <li key={person.name}>{person.name}</li>
  ))}
</ol> */

/* const listfromarray = React.createElement('ol',null,
people.map(person =>React.createElement('li',{key: person.name},person.name))) */

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App /> */}

  // </React.StrictMode>,
  
  <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
