import { Link } from 'react-router-dom';
import { useState,ChangeEvent, FormEvent, useEffect } from 'react';
import './AddYourRecipe.scss';

const AddYourRecipe = () => {
  const [formData, setFormData] = useState({
    breadTitle: '',
    breadDescription: '',
    breadImageURL: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.breadTitle || !formData.breadDescription || !formData.breadImageURL) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const responseRecipe = await fetch("http://localhost:8080/addBread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (responseRecipe.ok) {
        alert("Bread added successfully!");
        
        //not working
        setFormData({
          breadTitle: '',
          breadDescription: '',
          breadImageURL: '',
        });
      }
    } catch (error) {
      console.error("Error adding bread :", error);
    }
  };

  useEffect(() => {
    handleSubmit;
  }, []); 

  return (
    <div className="addRecipe__container">
      <form onSubmit={handleSubmit}>
        <div className="addRecipe__container--title">
          <label htmlFor="breadTitle">Title:</label>
          <input placeholder='Argentinean Chipa' type="text" id="breadTitle" name="breadTitle" onChange={handleChange} />
        </div>
        <div className="addRecipe__container--shortDescription">
          <label htmlFor="breadDescription">Short Bread description:</label>
          <input placeholder='Delicious salted and cheesy bread...' type="text" id="breadDescription" name="breadDescription" onChange={handleChange} />
        </div>
        <div className="addRecipe__container--imageURL">
          <label htmlFor="breadImageURL">Paste image URL:</label>
          <input placeholder='https://media.istockphoto.com/id/1584774410/photo/bread-over-brown.jpg' type="text" id="breadImageURL" name="breadImageURL" onChange={handleChange} />
        </div>
        <div className="addRecipe__container--btn">
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddYourRecipe;