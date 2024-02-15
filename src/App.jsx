import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/home' Component={Home}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
