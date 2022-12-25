import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

const Memo_Tut = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => setData(res.data));
  }, []);

  const findLongestName = (comments) => {
    if(!comments) return null;
    let longestName = "";

    for(let i = 0; i < comments.length; i++)
      if(longestName.length < comments[i].name.length)
        longestName = comments[i].name;
    
    console.log("findLongestName called");
    return longestName;
  }

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (    
    <>
      <button onClick={() => setToggle(!toggle)} >Toggle</button>
      {toggle && <h2>Toggle is TRUE</h2>}
      <h1> {getLongestName} </h1>
    </>
  )
}

export default Memo_Tut