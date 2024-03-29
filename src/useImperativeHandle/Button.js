import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        },
    }))

  return (
    <>
        <button>Button from child</button>
        {toggle && <h1>TEXT</h1>}
    </>
  )
})

export default Button