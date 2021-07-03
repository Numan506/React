import React from 'react';
import ReactDOM from 'react-dom';
// import Card from './components/Card';
import Data from './data.json';
import Card1 from './components/card1';
import ConditionalRendaring from './ConditionalRendaring/index'
import EventHandler from './EventHandler/index'
import Hooks from './Hooks/index';




function App(){

    return <div>
                  <h1 className={"headingStyle"}>This is my app: </h1>
                  {/* {Data.map((items)=>(<Card Name = {items.Name} University ={items.University} Dept ={items.Dept} Cgpa={items.Cgpa} batch ={items.batch} />))} */}
                  {/* <Card1 name ="Numan" /> */}
                  {/* <ConditionalRendaring /> */}
                  {/* <EventHandler /> */}
                  <Hooks />
    </div>
}



export default App;