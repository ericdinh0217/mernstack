import './styles.css';

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Success from './Success'; // Import the Success component
import LifecycleDemo from './LifecycleDemo'; // Import the LifecycleDemo component
import OptimizeRendering from './OptimizeRendering'; // Import the OptimizeRendering component

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>React App</h1>
      <Success /> {/* Render the Success component */}
      <LifecycleDemo /> {/* Render the LifecycleDemo component */}
      <OptimizeRendering /> {/* Render the OptimizeRendering component */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
