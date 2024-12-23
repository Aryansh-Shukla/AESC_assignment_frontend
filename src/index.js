import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new root API
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
