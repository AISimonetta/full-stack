import { FormEventHandler, MouseEventHandler } from "react";
import "./Navbar.scss"
import SearchBox from "../SearchBox/SearchBox"

type NavbarProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleReset: MouseEventHandler<HTMLButtonElement>;
};
const Navbar = ({searchName,handleInput, handleReset}: NavbarProps) => {
  return (
    <div className="navbar__container">
        <div className="navbar__title">
          <h2>Filter : </h2>
        </div>
        <div>
          <SearchBox searchName={searchName} handleInput={handleInput} />
        </div>
        <div>
        <button className="resetBtn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Navbar