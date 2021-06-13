import React from 'react';
import ReactDOM from 'react-dom';

const name = "Numan"
const date = new Date();
const dateName = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getYear();
ReactDOM.render(
  <div>
   <h3> {"My name is : " +name}</h3>
    <h5> Hello world </h5>
    <h5> Hello Banglaesh </h5>
    {"Date is: "+dateName +"/"+getMonth+"/"+getYear}
   
    </div>,
 
  document.getElementById('root')
);


