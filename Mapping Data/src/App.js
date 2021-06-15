import React from 'react';
import Card from './components/Card';
import Data from './data.json';

function App(){


  
let items = Data.map((item ,index)=> <Card key={index} title={item.title} university={item.university} />)


    return <div>
                 <h1 className="headingStyle"> Props & Destructuring</h1>
                 {items}     
                 
           </div>
}

export default App;