import React from 'react';
import { render } from 'react-dom';
//import './index.css';
import Navigation from './components/Navigation';
import Overview from './components/Overview'
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';
/* 
ReactDOM.render(
  <React.StrictMode>
    <App message='Hello World!'/>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

function Portfolio(){
  return <>
          <Navigation collapseOnSelect={true} logo="assets/images/LogoPortfolio.svg"/>
          <Overview />
        </>;
}


console.log('Hello World');
render(<Portfolio />, 
        document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
