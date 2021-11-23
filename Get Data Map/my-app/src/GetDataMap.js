import React, { Component } from 'react'
import axios from 'axios'

class GetDataMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             allData:[]
        }
    }

    componentDidMount(){
        axios.get("https://restcountries.com/v3.1/all")
        .then((res)=>{
            this.setState({
                allData:res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render() {
        const myData= this.state.allData
        const list = myData.map((result)=>{
            return <li>{result.name.common}</li>
        })
        return (
            <div>
                <ul>{list}</ul>
            </div>
        )
    }
}
export default GetDataMap