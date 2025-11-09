// App.jsx
import './App.css'
import Card from './components/card.jsx'

function App() {
  let myObj = {
    username: 'Yoyo',
    age: 21
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className="bg-green-400 text-blue-500 p-4 rounded-xl">
        Tailwind test
      </h1>

      <Card username='reactcode' someObj={myObj} myArr={newArr} btntext='click me'/>
      <Card username='Yoyo is the solution' btntext='visit me'/>
    </>
  )
}

export default App
