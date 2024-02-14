import "./BreadCard.scss"

type BreadCardProps = {
    bread_id: number;
    bread_title: string;
    bread_description: string;
    bread_imageURL: string;
};

const BreadCard = ({ bread_id, bread_title, bread_description, bread_imageURL }: BreadCardProps) => {
  return (
    <div className="breadCard__container">
      <h1> {bread_title}</h1>
      <img src={bread_imageURL} alt={`Bread: ${bread_title}`} />
      <p>Bread ID: {bread_id}</p>
      <h2>{bread_description}</h2>
      <a href="#">Find out more..</a>
      <button>Edit</button>
    </div>
  );
};

export default BreadCard;