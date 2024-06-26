import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

//props1
//or using destructuring  {restaurant}
//or even go deeper like const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;
//const RestaurantCard = ({ restaurant }) => {
// ...spread operator
const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  // console.log(cloudinaryImageId);
  // console.log(name);
  // console.log(cuisines);
  // console.log(avgRating);
  //const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      {/* <h2>{console.log(restaurantList[0].data.name)}</h2> */}
      <Link to={"/restaurant/" + id}>
        <h2>{name}</h2>
      </Link>

      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} *</h4>
    </div>
  );
};

export default RestaurantCard;
