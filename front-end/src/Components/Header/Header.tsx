import "./Header.scss"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__brandName">
        <p className="header__title">Nona's Homemade Bread</p>
      </div>
      <div className="header__links">
        <div>
          <Link to="/add-recipe" className="header__addYourRecipes">| Add your recipe |</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;