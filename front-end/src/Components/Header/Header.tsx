import "./Header.scss"


const header = () => {
  return (
    <div className="header">
      <div className="header__brandName">
      <p >Nona's Homemade Bread</p>
      </div>
      <div className="header__links">
        <div>
          <a className="header__recipes" href="#">| Recipes |</a>
        </div>
        <div>
          <a className="header__addYourRecipes" href="#">| Add your recipe |</a>
        </div>
      </div>
    </div>
  )
}

export default header