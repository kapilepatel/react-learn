import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (_searchText, _restaurants) => {
  return _restaurants.filter((_restaurants) =>
    _restaurants.info.name.toUpperCase().includes(_searchText.toUpperCase())
  );
};

const Body = () => {
  
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {    
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //console.log(response);
    const json = await response.json();
    //console.log(json);

    const data =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    //console.log(data);
    setAllRestaurants(data);
    setFilteredRestaurants(data);
  }
// return <Shimmer />

  if (!allRestaurants) return null;

  if (allRestaurants.length > 0 && filteredRestaurants?.length === 0) {
    return <h1>No match found!</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
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
