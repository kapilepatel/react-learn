import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  
  //const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id);

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     "https://raw.githubusercontent.com/kapilepatel/react-learn/main/src/dummyData/restaurantInfo.json"
  //     //+ id
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   json?.menu?.map((item, index) => {
  //     console.log(item.name);
  //   });

  //   setRestaurant(json);
  // }
  if(!restaurant){
    return <Shimmer />;

  }


  return (
    <div className="restaurantInfo">
      <div>
        <h1>Restaurant Id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <h2>Rating: {restaurant.avgRating}</h2>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4cb9a0be56e14bc8041ddd0c9b7212db"></img>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.menu?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
