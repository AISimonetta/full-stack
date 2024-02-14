import "./MainSection.scss"
import BreadCard from "../BreadCard/BreadCard";
import { Bread } from "../../Type/BreadType";

type MainSectionProps = {
  filteredBreads: Bread[];
};

const MainSection = ({filteredBreads}:MainSectionProps) => {


  return (
    <div className="mainSection__container">
        console.log(filteredBreads); 
      {filteredBreads.length > 0 ? (
        filteredBreads.map((bread) => (
          <BreadCard
            bread_id={bread.bread_id}
            bread_description={bread.bread_description}
            bread_imageURL={bread.bread_imageURL}
            bread_title={bread.bread_title}
          />
        ))
      ) : (
        <p className='main__noResults'>No matching results.</p>
      )}
    </div>
  )
}

export default MainSection;