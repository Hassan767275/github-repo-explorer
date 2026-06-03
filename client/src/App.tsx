import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/api')
      .then(res => res.json())
      .then(data => console.log(`message recived ${data}`))
  }, [])
  return (
    <>
      <h1>welcome to my githib repo project</h1>
    </>
  )
}

export default App