import Home from './components/home.jsx'
import Header from './components/header.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
