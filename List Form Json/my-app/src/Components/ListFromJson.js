import React, { Component } from 'react';

class ListFromJson extends Component {

    render() {
        var myData=[
            {
              name:"Abu Jakaria Md Numan",
              age:24,
              dept:"CSE",
              City:"Sylhet"
            },
            {
              name:"Mahibur Rahman",
              age:25,
              dept:"CSE",
              City:"Sylhet"
            },
            {
              name:"Abdul khalek",
              age:24,
              dept:"CSE",
              City:"Shirajgonj"
            }
        ]

       var myData = myData.map((data)=>{
            return <li>{data.name}</li>
           
        })
        return (
            <div>
                <ol>{myData}</ol>
            </div>
        );
    }
}

export default ListFromJson;