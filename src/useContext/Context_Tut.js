import React, { useState, createContext } from 'react'
import Login from './Login'
import User from './User'

export const usernameContext = createContext();

const Context_Tut = () => {
    const [username, setUsername] = useState("");
  return (
        <usernameContext.Provider value={{username, setUsername}} >
            <Login /> <User />
        </usernameContext.Provider>
  )
}

export default Context_Tut