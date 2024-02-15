import { FormEventHandler } from "react";
import "./Navbar.scss"
import SearchBox from "../SearchBox/SearchBox"

type NavbarProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};
const Navbar = ({searchName,handleInput}: NavbarProps) => {
  return (
    <div className="navbar__container">
        <div className="navbar__title">
          <h2>Filter : </h2>
        </div>
        <div>
          <SearchBox searchName={searchName} handleInput={handleInput} />
        </div>
    </div>
  )
}

export default Navbar