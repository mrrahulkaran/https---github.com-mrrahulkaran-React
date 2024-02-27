import { ImageCDN_URL } from "../constant";

const Card = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className='card'>
      <img src={ImageCDN_URL + cloudinaryImageId} alt='card-img'></img>

      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

export default Card;
