import { useState, FormEvent, useEffect } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import MainSection from './Components/MainSection/MainSection';
import { Bread } from './Type/BreadType';

function App() {
  const [searchName, setSearchName] = useState<string>('');
  const [breads, setBreads] = useState<Bread[]>([]);

  const getBreads = async () => {
    try {
      let url = "http://localhost:8080/breads";
      const response = await fetch(url);
      const data = await response.json();
      console.log("Breads data:", data);
      setBreads(data);
    } catch (error) {
      console.error("Error fetching breads:", error);
    }
  };

  useEffect(() => {
    getBreads();
  }, []);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  let filteredBreads = breads;
  if (searchName) {
    filteredBreads = breads.filter((bread) =>
      bread.breadTitle.includes(searchName)
    );
  }

  return (
    <div className='wholePage'>
      <div className='header'>
        <Header />
      </div>
      <div className='navbar'>
        <Navbar
          searchName={searchName}
          handleInput={handleInput}
        />
      </div>
      <div className='mainSection'>
        <MainSection filteredBreads={filteredBreads} />
      </div>
    </div>
  );
}

export default App;

  // let filteredBreads: Bread[] = breads;
  // if (searchName) {
  //   filteredBreads = breads.filter((bread) => {
  //     return (
  //       bread &&
  //       bread.bread_title &&
  //       bread.bread_title.includes(searchName.toLowerCase())
  //     );
  //   });
  // }
