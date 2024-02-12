import { FormEventHandler } from "react";
import "./Navbar.scss"
import SearchBox from "../SearchBox/SearchBox"
import { FilterRecipes } from "../FilterRecipes/FilterRecipes"

type NavbarProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};
const Navbar = ({searchName,handleInput}: NavbarProps) => {
  return (
    <div>
       <SearchBox searchName={searchName} handleInput={handleInput} />
      <FilterRecipes/>
    </div>
  )
}

export default Navbar