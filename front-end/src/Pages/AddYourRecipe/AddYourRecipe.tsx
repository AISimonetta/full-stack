import { Link } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';
import './AddYourRecipe.scss';

const AddYourRecipe = () => {
  const initialFormData = {
    breadTitle: '',
    breadDescription: '',
    breadImageURL: '',
  };

  const [formData, setFormData] = useState(initialFormData);

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
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error("Error adding bread:", error);
    }
  };

  return (
    <div className="addRecipe__container">
      <form onSubmit={handleSubmit}>
        <div className="addRecipe__container--title">
          <label htmlFor="breadTitle">Title : </label>
          <input placeholder='Argentinean Chipa' type="text" id="breadTitle" name="breadTitle" value={formData.breadTitle} onChange={handleChange} />
        </div>
        <div className="addRecipe__container--shortDescription">
          <label htmlFor="breadDescription">Short Bread description : </label>
          <input placeholder='Delicious salted and cheesy bread...' type="text" id="breadDescription" name="breadDescription" value={formData.breadDescription} onChange={handleChange} />
        </div>
        <div className="addRecipe__container--imageURL">
          <label htmlFor="breadImageURL">Paste image URL : </label>
          <input placeholder='https://media.istockphoto.com/id/1584774410/photo/bread-over-brown.jpg' type="text" id="breadImageURL" name="breadImageURL" value={formData.breadImageURL} onChange={handleChange} />
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