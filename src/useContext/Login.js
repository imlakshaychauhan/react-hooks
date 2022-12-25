import React, { useContext } from 'react'
import { usernameContext } from './Context_Tut';

const Login = () => {
    const {setUsername} = useContext(usernameContext);
  return (
    <div style={{ border:"2px red solid" }}>
        <h1> Login Component </h1>
        <input onChange={(e) => { setUsername(e.target.value); }} />
    </div>
  )
}

export default Login