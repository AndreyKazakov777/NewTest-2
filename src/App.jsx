import React from 'react';
import './App.css';
import User from './Components/User/index2';

function App() {
  const user = {
    name: 'Ivan',
    secondName: 'Petrov',
    age: '25',
    gender: 'М',
    rank: 3
  }
  return (
  
      <User {...user}/>
  
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
