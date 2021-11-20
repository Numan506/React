import React, { Component } from 'react'
import ReactTable from "react-table";  
import "react-table/react-table.css"

class Mytable extends Component {
    render() {
        
        const dataTable = [{name:"Numan", age:"23"}]
        const col = [{Header:"name",accessor:" age "}]  
           
           return (
            <div>  
            
            <ReactTable  
                data={dataTable}  
                columns={col}  
                defaultPageSize = {2}  
                pageSizeOptions = {[2,4,6,8,10]}  
            />  
        </div>       
        );
    }
}


export default Mytable