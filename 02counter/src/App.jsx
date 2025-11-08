// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // let counter = 5

  const addValue = () => {
    
    
  if (counter < 20) {
    setCounter(counter + 1);
    console.log('clicked', Math.random());
  }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Maggi aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
