import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <CreateTask/>
     
    </div>
    </>
  )
}

export default App
