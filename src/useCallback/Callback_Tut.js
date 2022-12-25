import React, { useCallback, useState } from 'react'
import Child from './Child';

const Callback_Tut = () => {
    const [name, setName] = useState("My name is Lakshay");
    const [toggle, setToggle] = useState(false);
    const returnName = useCallback(() => { return name; }, [name]);
  return (
    <>
        <Child returnName={returnName} />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h1>Toggle ON</h1>}
    </>
  )
}

export default Callback_Tut