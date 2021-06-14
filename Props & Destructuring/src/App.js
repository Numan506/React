import React from 'react';
import Card from './components/Card';

function App(){
    return <div>
                 <h1 className="headingStyle"> Props & Destructuring</h1>
     

                 <Card titleText="Numan"  universityText="City University"/>
                 <Card titleText="Rakib"  universityText="City University"/>
                 <Card titleText="Khalek" universityText="City University"/>
                
          
                 
</div>
}

export default App;