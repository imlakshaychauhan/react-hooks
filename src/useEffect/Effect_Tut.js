import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Effect_Tut = () => {
    const [count, setCount] = useState(0);
    
// 1. No dependency passed (Runs on every render)
    // useEffect(() => {
    //   setTimeout(() => {
    //     setCount(count + 1);
    //   }, 1000);
    // })
    
// 2. Runs on every render (Runs only on the first render)
    // useEffect(() => {
    //   setTimeout(() => {
    //     setCount(count + 1);
    //   }, 1000);
    // }, [])

// 3. Props or state values 
// (Runs on the first render And any time any dependency value changes)
// {only runs when count gets updated }
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            console.log(res.data);
            console.log("API CALLED : " + count);
        })
    }, [count]);
    
  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default Effect_Tut