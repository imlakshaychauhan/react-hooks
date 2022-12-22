import React, { useEffect, useRef, useState } from 'react'


const Ref_Tut = () => {

// 1. useState causes a re-render, when updated
// (To avoid this, useRef can be used)
// this code shows the page is re-rendering, only when the state gets update
// we are updating the value of ref but it does not cause rendering when updated.
    // const count = useRef(0);
    // const [inp, setInp] = useState("");
    // useEffect(() => {
    //     count.current = count.current + 1
    // })
    // return (
    //     <>
    //         <input onChange={(e) => setInp(e.target.value)} placeholder='Enter' />
    //         <h1>{count.current}</h1>
    //     </>
    // )

// 2. useRef can also be used for DOM manipulation
    // const inpElement = useRef();
    // const focusElement = () => {
    //     inpElement.current.focus();
    // }
    // return (
    //     <>
    //         <input ref={inpElement} />
    //         <button onClick={focusElement}>Focus</button>
    //     </>
    // )

// 3. useRef Hook can also be used to keep track of previous state values.
// (because we are able to persist useRef values between renders.)
    const [inp, setInp] = useState();
    const prevInp = useRef("");
    useEffect(() => {
        prevInp.current = inp;
    })
    return (
        <>
            <input onChange={(e) => setInp(e.target.value)} />
            <h1>{inp}</h1>
            <h1>{prevInp.current}</h1>
        </>
    )
}

export default Ref_Tut