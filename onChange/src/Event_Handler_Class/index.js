import React, { Component } from 'react'

class Event_Handler_Class extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             changeValue: ''
        }
    }
    
    onChangeClick = (text)=>{
         this.setState({
            changeValue : text.target.value
         },()=>{
            console.log(this.state.changeValue)
         })
         
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeClick} />
                <p>{this.state.changeValue}</p>
            </div>
        )
    }
}

export default Event_Handler_Class