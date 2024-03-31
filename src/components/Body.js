import { useState, useEffect } from "react";
import { IMG_CDN_URL, restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const filterData = (_searchText, _restaurants) => {
  return _restaurants.filter((_restaurants) =>
    _restaurants.data.name.toUpperCase().includes(_searchText.toUpperCase())
  );
};

const Body = () => {
  console.log("Inside Body");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  //data.cards[4].card.card.gridElements.infoWithStyles.restaurants
  useEffect(async ()=>{
    console.log('in use effect');
    getRestaurants();
    
  }, []);

  async function getRestaurants(){
    
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    //console.log(response);
    const json = await response.json();
    console.log(json);
    
    const data = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    console.log(data);
    setRestaurants(data);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            // <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            
            
          );
        })}
      </div>
    </>
  );
};

export default Body;
