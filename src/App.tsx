import React from 'react';
import logo from './logo.svg';
import "./styles.scss";

function App() {
  return (
    <div id='toplevel'>
      <p>Here is some text <br></br> maybe across lines.</p>
      <div id='wrappingContainer'>
        {[...Array(1800)].map((idx) => {
          return (<span className='container'>
            <span className='fitWidth'>
              <span className='fitHeight'></span>
            </span>
          </span>)
        })}
      </div>
    </div>

  );
}

export default App;
