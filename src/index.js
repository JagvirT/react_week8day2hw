import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JagInfo from './components/JagInfo/JagInfo';
import Superhero from './components/Superhero/Superhero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JagInfo />
    <Superhero /> 
    <App />
  </React.StrictMode>
);

