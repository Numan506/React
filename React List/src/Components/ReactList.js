import React, { Component } from 'react';

class SelectOption extends Component {
  
    myFunction=(data)=>{
        return <li>{data}</li>
    }

    render() {

        var nameList=["Numan","jakaria","abdul","Mahibur"]
        var result = nameList.map(this.myFunction)

        return (
            <div>
               <ol>{result}</ol>
            </div>
        );
    }
}

export default SelectOption;