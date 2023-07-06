import './App.css'
import { Home } from '../pages/Home'
import { BrowserRouter } from 'react-router-dom'
import { RoutesIndex } from '../routes/RoutesIndex'

function App () {
  return (
    <>
      <BrowserRouter>
      <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
