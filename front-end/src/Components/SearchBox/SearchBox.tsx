import { FormEventHandler } from "react";
import "./SearchBox.scss"


type SearchBoxProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({ searchName, handleInput }: SearchBoxProps) => {
  return (
      <div className="searchByName">
      <input
        name="searchName"
        type="text"
        value={searchName}
        onChange={handleInput}
        className="searchByName__input"
        placeholder=" Search bread recipes by name "
      />
    </div>
  )
}

export default SearchBox