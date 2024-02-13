
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import { MainSection } from './Components/MainSection/MainSection';
import { useState, FormEvent } from 'react';


function App() {
  const [searchName, setSearchName] = useState<string>('');
  const [isNutFree, setIsNutFree] = useState<boolean>(false);
  const [containsEgg, setContainsEgg] = useState<boolean>(false);
  const [containsFruit, setContainsFruit] = useState<boolean>(false);

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
                handleInput={handleInput}
                containsEgg={containsEgg}
                containsFruit={containsFruit}
                isNutFree={isNutFree}
                />
      </div>
      <div className='mainSection'>
        <MainSection/>
      </div>
    </div>
  )
}

export default App
