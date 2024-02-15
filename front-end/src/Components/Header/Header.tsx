import "./Header.scss"
import { Link } from 'react-router-dom';


const header = () => {
  return (
    <div className="header">
      <div className="header__brandName">
      <p >Nona's Homemade Bread</p>
      </div>
      <div className="header__links">
        {/* <div>
          <a className="header__recipes" href="#">| Recipes |</a>
        </div> */}
        <div>
          <Link to={`/add-recipe`}  className="header__addYourRecipes">| Add your recipe |</Link>
        </div>
      </div>
    </div>
  )
}

export default header