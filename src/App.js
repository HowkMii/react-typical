import React from 'react';
import me from './me.jpg';
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="" />
        <h1>  Hi, I'm Abdelhakim </h1>
        <p>
          
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Developer',
              1000,
              'Designer',
              1000,
              'Freelancer',
              1000,
              'Student',
              1000,





              ]}

          />

        </p>
      </header>
    </div>
  );
}

export default App;
