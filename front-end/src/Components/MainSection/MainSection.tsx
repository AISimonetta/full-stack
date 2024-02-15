import BreadCard from '../BreadCard/BreadCard';
import { Bread } from '../../Type/BreadType';
import './MainSection.scss';

type MainSectionProps = {
  filteredBreads: Bread[] | undefined;
};

const MainSection = ({ filteredBreads }: MainSectionProps) => {
  console.log("Filtered breads:", filteredBreads);
  if (!filteredBreads) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mainSection__container">
    {filteredBreads.length > 0 ? (
      filteredBreads.map((bread) => (
        <BreadCard
          key={bread.breadId}
          breadDescription={bread.breadDescription}
          breadImageURL={bread.breadImageURL}
          breadTitle={bread.breadTitle}
          breadId={bread.breadId}
        />
      ))
    ) : (
      <p className='main__noResults'>No matching results.</p>
    )}
  </div>
  );
};

export default MainSection;