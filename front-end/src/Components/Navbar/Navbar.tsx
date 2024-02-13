import { FormEventHandler } from "react";
import "./Navbar.scss"
import SearchBox from "../SearchBox/SearchBox"
import { FilterRecipes } from "../FilterRecipes/FilterRecipes"

type NavbarProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  isNutFree: boolean;
  containsFruit: boolean;
  containsEgg: boolean;
};
const Navbar = ({searchName,handleInput,isNutFree,containsFruit,containsEgg}: NavbarProps) => {
  return (
    <div className="navbar__container">
        <div className="navbar__title">
          <h2>Filter : </h2>
        </div>
        <div>
          <SearchBox searchName={searchName} handleInput={handleInput} />
        </div>
        <div>
          <FilterRecipes handleInput={handleInput} isNutFree={isNutFree} containsEgg={containsEgg} containsFruit={containsFruit} />
        </div>
    </div>
  )
}

export default Navbar