import React, { useEffect } from 'react'

const Child = ({ returnName }) => {
    useEffect(() => {
        console.log("returnName called");
    }, [returnName]);
  return (
    <h1>{returnName()}</h1>
  )
}

export default Child