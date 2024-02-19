import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';


const baseData = {
  r: '205',
  g: '129',
  b: '59',
};

ReactDOM.render(
  <React.StrictMode>
    <App 
    baseColorState={baseData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
