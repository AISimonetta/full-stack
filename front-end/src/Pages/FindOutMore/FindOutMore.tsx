import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Bread } from '../../Type/BreadType';
import { Recipe } from '../../Type/RecipeType';
import './FindOutMore.scss'

export const FindOutMore = () => {
  const [bread, setBread] = useState<Bread | null>(null);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const { id } = useParams<{ id: string }>();

  const getBreadAndRecipe = async () => {
    try {
      const breadResponse = await fetch(`http://localhost:8080/breads/${id}`);
      const breadData = await breadResponse.json();
      const recipeResponse = await fetch(`http://localhost:8080/recipes/${id}`);
      const recipeData = await recipeResponse.json();

      const recipesFetch = recipeData[0];
      setBread(breadData);
      setRecipe(recipesFetch);

      console.log(breadData);
      console.log(recipeData);
      console.log(recipesFetch);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getBreadAndRecipe();
  }, [id]); 

  if (!bread || !recipe) {
    return <div>Data not found</div>;
  }

  return (
    <div className="findOutMore__container">
      <div>
        <h1 className="findOutMore__container--title">{bread.breadTitle}</h1>
      </div>
      <div>
        <img className="findOutMore__container--image" src={bread.breadImageURL} alt={`Bread: ${bread.breadTitle}`} />
      </div>
      <div>
        <p className="findOutMore__container--id">{bread.breadId}</p>
        <p className="findOutMore__container--recipeId">{recipe.recipeId}</p>
        <h2 className="findOutMore__container--description">{bread.breadDescription}</h2>
        <h3 className="findOutMore__container--ingredients">INGREDIENTS : {recipe.recipeIngredients}</h3>
        <p className="findOutMore__container--recipeDescription">RECIPE :{recipe.recipeDescription}</p>
      </div>
      <div className="findOutMore__container--interactive">
        <Link to="/" className="findOutMore__container--btn">
          Go back
        </Link>
      </div>
    </div>
  );
}