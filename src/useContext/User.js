import React, { useContext, useState } from 'react'
import { usernameContext } from './Context_Tut'

const User = () => {
    const {username} = useContext(usernameContext);
  return (
    <>
        <h1>User Component</h1>
        <h1>{username}</h1>
    </>
  )
}

export default User