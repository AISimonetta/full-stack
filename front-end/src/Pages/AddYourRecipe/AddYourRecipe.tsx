import { Link } from 'react-router-dom';

const AddYourRecipe = () => {
  return (
    <div className="addRecipe__container">AddYourReecipe
        <Link to="/" className="addRecipe__container--btn">
            Go back
        </Link>
        <button>Submit</button>
    </div>
  )
}

export default AddYourRecipe