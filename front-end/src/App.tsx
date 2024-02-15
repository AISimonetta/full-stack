import { useState, FormEvent, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import MainSection from './Components/MainSection/MainSection';
import { Bread } from './Type/BreadType';
import { FindOutMore } from './Pages/FindOutMore/FindOutMore';
import AddYourRecipe from './Pages/AddYourRecipe/AddYourRecipe';

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

  let filteredBreads: Bread[] = breads;
  if (searchName) {
    filteredBreads = breads.filter((bread) => {
      return (
        bread &&
        bread.breadTitle &&
        bread.breadTitle.toLowerCase().includes(searchName)
      );
    });
  }

  return (
    <Router>
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
        <Routes>
          <Route path="/find-out-more/:id" 
            element={<FindOutMore />} />
          <Route path="/add-recipe/:id" element={<AddYourRecipe />} />
          <Route path="/" element={<div className='mainSection'><MainSection filteredBreads={filteredBreads} /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;