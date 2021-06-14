import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css' 

const name = "Abu Jakaria Md Numan"
const universityName = "City University"
const dept = "CSE"
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
    <h1 className="headingStyle"> Design a card</h1>
   <div className="card">
    
    <h3 className="cardname"> {"My name is : " +name}</h3>
    <p className="cardTitle">{universityName}</p>
    <p className="cardDes">{dept}</p>
    <p className="cardFooter">{"Date is: "+dateName +"/"+getMonth+"/"+getYear}</p>

   </div>
    </div>,
 
  document.getElementById('root')
);


