
import React, { Component } from 'react'
import axios from 'axios'

class CountryList extends Component {

    componentDidMount(){
        axios.get("https://restcountries.com/v3.1/all")
        .then((res)=>{
            console.log(res.data)
            for(var i=0;i<=res.data.length;i++){
                const result = res.data[i].name.common
                console.log(i,result)
            }
            // const result = res.data[0].name.common
            // console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }




    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default CountryList