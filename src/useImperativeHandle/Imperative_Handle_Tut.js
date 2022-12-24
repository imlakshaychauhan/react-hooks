import React, { useRef } from 'react'
import Button from './Button'

const Imperative_Handle_Tut = () => {
    const btnRef = useRef(null);
  return (
    <>
        <button onClick={() => btnRef.current.alterToggle()} >Button from parent</button>
        <Button ref={btnRef} />
    </>
  )
}

export default Imperative_Handle_Tut