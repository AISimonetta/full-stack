import "./BreadCard.scss"

type BreadCardProps = {
  breadId: number;
  breadTitle: string;
  breadDescription: string;
  breadImageURL: string;
};

const BreadCard = ({ breadId, breadTitle, breadDescription, breadImageURL, }: BreadCardProps ) => {
  console.log("BreadCard props:", {
    breadId,
    breadTitle,
    breadDescription,
    breadImageURL,
  });
  return (
    <div className="breadCard__container">
      <div>
        <h1  className="breadCard__container--title"> {breadTitle}</h1>
      </div>
      <div>
        <img   className="breadCard__container--image"src={breadImageURL} alt={`Bread: ${breadTitle}`} />
      </div>
      <div>
      <p  className="breadCard__container--id">{breadId}</p>
        <h2  className="breadCard__container--description">{breadDescription}</h2>
      </div>
      <div className="breadCard__container--interactive">
        <a  className="breadCard__container--link" href="#">Find out more..</a>
        <button  className="breadCard__container--btn">Edit</button>
      </div>
    </div>
  );
};

export default BreadCard;