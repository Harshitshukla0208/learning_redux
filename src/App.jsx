import './App.css'
import Home from './Component/Home'
import { useSelector } from 'react-redux'

function App() {
  const {c} = useSelector(state => state.custom)
  return (
    <>
      <h2>{c}</h2>
      <Home />
    </>
  )
}

export default App
