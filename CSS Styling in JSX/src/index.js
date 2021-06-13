import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' 

const name = "Abu Jakaria Md Numan"
const date = new Date();
const dateName = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getYear();

// const headingStyle = {
//   backgroundColor :"green",
//   color :"White",
//   textAlign :"center",
//   fontSize :"3rem"

// }
ReactDOM.render(
  <div>
    <h1 className="headingStyle"> React Program</h1>
    <h3> {"My name is : " +name}</h3>
    <h5> Hello world </h5>
    <h5> Hello Banglaesh </h5>
    {"Date is: "+dateName +"/"+getMonth+"/"+getYear}
   
    </div>,
 
  document.getElementById('root')
);


