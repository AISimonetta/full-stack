
import { useState, FormEvent, useEffect } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import MainSection from './Components/MainSection/MainSection';
import { Bread } from './Type/BreadType';


function App() {
  const [searchName, setSearchName] = useState<string>('');
  const [breads, setBreads] = useState<Bread[]>([]);

  const getBreads = async () =>{
    let url = "http://localhost:8080/breads";
    const response = await fetch(url);
    const data = await response.json();
        setBreads(data);
  }
  useEffect(() => {
    getBreads();
  }, []);
  useEffect(() => {
    console.log(breads);
  }, [breads]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchName(event.currentTarget.value);
    console.log(searchName);
  };

  const filteredBreads = breads.filter((bread) =>
  bread.bread_title && bread.bread_title.toLowerCase().includes(searchName.toLowerCase())
);
console.log(filteredBreads);


  return (
    <div className='wholePage'>
      <div className='header'>
        <Header/>
      </div>
      <div className='navbar'>
        <Navbar searchName={searchName}
                handleInput={handleInput}
                />
      </div>
      <div className='mainSection'>
        <MainSection filteredBreads={filteredBreads}/>
      </div>
    </div>
  )
}

export default App
