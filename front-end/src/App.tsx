
import './App.css'
import { useState, FormEvent} from 'react';
import Navbar from './Components/Navbar/Navbar'
import { MainSection } from './Components/MainSection/MainSection'
import Header from './Components/Header/Header'


function App() {
  const [searchName, setSearchName] = useState<string>('');

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    // const { name, checked, value } = event.currentTarget;
    // switch (name) {
    //   case 'searchName':
    //     break;
    //   case '':
    //     break;
    //   case '':
    //     break;
    //   case '
    //     set
    //     break;
    //   default:
    //     break;
    // }
  };

  return (
    <div className='wholePage'>
      <div className='header'>
        <Header/>
      </div>
      <div className='navbar'>
        <Navbar searchName={searchName}
                handleInput={handleInput}/>
      </div>
      <div className='mainSection'>
        <MainSection/>
      </div>
    </div>
  )
}

export default App
