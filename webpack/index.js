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
          <footer>
            <p className="reference">Backgrund image by <a href="https://www.pexels.com/@francesco-ungaro">Francesco Ungaro</a> from Pexels </p>
          </footer>
        </>;
}

/*
To try to load slowerBackground
(() => {
  'use strict';
// Page is loaded
const objects = document.getElementById('main-body');

Array.from(objects).map((item) => {
    // Start loading image
  const img = new Image();
  img.src = item.dataset.src;
  // Once image is loaded replace the src of the HTML element
  img.onload = () => {
    return item.style.backgroundImage = `url(${item.dataset.src})`; 
      //item.classList.remove('asyncImage');
    /*return item.nodeName === 'IMG' ? 
      item.src = item.dataset.src :        
      item.style.backgroundImage = `url(${item.dataset.src})`;
  };
});
})()*/;

console.log('Hello World');
render(<Portfolio />, 
        document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
