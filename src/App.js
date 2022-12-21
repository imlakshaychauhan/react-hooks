import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => { setCounter(counter + 1); }
  const decrement = () => {
    if(counter > 0) setCounter(counter - 1);
  }
  return (
    <div className='App'> 
    <h1> {counter} </h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;