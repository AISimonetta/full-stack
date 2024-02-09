
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { MainSection } from './Components/MainSection/MainSection'
import Header from './Components/Header/Header'


function App() {


  return (
    <div className='wholePage'>
      <div className='header'>
        <Header/>
      </div>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='mainSection'>
        <MainSection/>
      </div>
    </div>
  )
}

export default App
