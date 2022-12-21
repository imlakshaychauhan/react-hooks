import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {counter: state.counter + 1,showText: state.showText};
        case "TOGGLE_SHOW_TEXT":
            return {counter: state.counter, showText: !state.showText};
        default:
            return state;
    }
}

const Reducer_Tut = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0, showText: true});
    const doSomething = () => {
        dispatch({type: "INCREMENT"});
        dispatch({type: "TOGGLE_SHOW_TEXT"});
    }
    return (
        <>
            <h1> {state.counter} </h1>
            <button onClick={doSomething}>Click Here</button>
            {state.showText && <h1>This is text</h1>}
        </>
    )
}

export default Reducer_Tut

// Why useReducer ?
    // Instead of initializing multiple states and update its value manually,
    // these states can be replaced by the reducer hooks that includes of
    // some methods in it, which helps the state to be updated.
    // const [counter, setCounter] = useState(0);
    // const [showText, setShowText] = useState(true);
    // const doSomething = () => {
    //     setCounter(counter + 1);
    //     setShowText(!showText);
    // }
    // useReducer is more helpful, when the state handling gets too manual and difficult.