import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-blue-200 flex  justify-center items-center h-screen'>
    <CreateTask/>
     
    </div>
    </>
  )
}

export default App
