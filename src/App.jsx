import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementer =()=> setCount(count +1);
  const decrementer =()=> setCount(count -1);
  const reseter =()=> setCount( 0);
  return (
    <>
      <div className="title-container">
      <h2 className="title">React Counter App</h2>
      <img src={reactLogo} alt="React Logo" />
      </div>

      <div className="counter-card">
        <span className="count">{count}</span>
        <div className="button-container">
        <button className="decrement" onClick={decrementer}>Decrement</button>
        <button className="reset" onClick={reseter}>Reset</button>
        <button className="increment" onClick={incrementer}>Increment</button>
        </div>
      </div>
    </>
  )
}

export default App
