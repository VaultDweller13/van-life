type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

export const Card = ({ imageUrl, name, price, type }: Van) => {
  return (
    <>
      <div>
        <img src={imageUrl} alt="Van image" />
        <h3>{name}</h3>
        <span>{price}$/day</span>
        <p>{type}</p>
      </div>
    </>
  );
};
