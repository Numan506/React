import React,{useState} from 'react'

export default function Hooks() {
    const[count,setCount]=useState(0);

    const increment =()=>{
        setCount(count+1)
    }

    const dicrement =()=>{
        setCount(count-1)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment} disabled={count==10?true:false}> + </button>
            <button onClick={dicrement}disabled={count==-10?true:false}> - </button>
        </div>
    )
}
