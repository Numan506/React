import React, { Component } from 'react'
import axios from 'axios'


class Post extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             setText:"",
             setNewText:""
        }
    }
    



    handleChange=(e)=>{
        e.preventDefault()
        const txt = e.target.value
        this.setState({
            setText:txt
        })
    }

    handleClick=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            body: this.state.setText,
        })
        .then((res)=>{
            this.setState({
               setNewText:res.data.body
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.setNewText}</p>
                <input onChange={this.handleChange} type="text" />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
export default Post