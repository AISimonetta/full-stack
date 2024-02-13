import { FormEventHandler } from "react";
import "./FilterRecipes.scss"

type FilterRecipesProps = {
handleInput: FormEventHandler<HTMLInputElement>;
isNutFree: boolean;
containsFruit: boolean;
containsEgg: boolean;
}

export const FilterRecipes = ({handleInput,isNutFree,containsFruit,containsEgg}: FilterRecipesProps) => {
  return (
    <div className="filterCheckboxes">
        <div className="input__checkbox">
        <label htmlFor="isNutFree">Nut-free recipes: </label>
        <input
          type="checkbox"
          name="isNutFree"
          id="isNutFree"
          onChange={handleInput}
          checked={isNutFree}
        />
      </div>

      <div className="filterCheckboxes">
        <label htmlFor="containsFruit">Recipes which contain fruits: </label>
        <input
          type="checkbox"
          name="containsFruit"
          id="containsFruit"
          onChange={handleInput}
          checked={containsFruit}
        />
      </div>

      <div className="filterCheckboxes">
        <label htmlFor="containsEgg">Recipes which contain eggs: </label>
        <input
          type="checkbox"
          name="containsEgg"
          id="containsEgg"
          onChange={handleInput}
          checked={containsEgg}
        />
      </div>

    </div>
  )
}
