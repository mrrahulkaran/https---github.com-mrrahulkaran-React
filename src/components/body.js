import Card from "./card";

import { RestaurantsList } from "../constant";
const Body = function () {
  return (
    <div className='body'>
      {RestaurantsList.map((resturant) => {
        return <Card {...resturant.info} />;
      })}
    </div>
  );
};

export default Body;
