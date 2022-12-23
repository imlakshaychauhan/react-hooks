import React, { useEffect, useLayoutEffect, useRef } from 'react'

// https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
const Layout_Effect_Tut = () => {
    const inpRef = useRef(null);
    let i = 0;
    useLayoutEffect(() => {
        console.log(inpRef.current.value + ", " + i);
        i++;
    }, []);
    useEffect(() => {
        inpRef.current.value = "Honey";
    }, []);
  return (
    <input ref={inpRef} value="pedrotech" placeholder='Enter the name' />
  )
}

export default Layout_Effect_Tut