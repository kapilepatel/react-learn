import { useState } from "react";
import { IMG_CDN_URL, restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

//props = properties
const Body = () => {
  console.log("Inside Body");
  const onChangeInput = (e) => {
    console.log("I'm getting changed");
    console.log(e.target.value);
  };

  // let searchTxt = "I'm static value from variable";
  //state
  //hooks
  //use state
  //why?
  //searchTxt is a local state variable,
  //returns variable name and function to update the first value
  const [searchText, setSearchText] = useState("KFC");
 //const temp = useState("");
 //const [searchText, setSearchText] = temp;

 const [searchClicked, setSearchClicked] = useState("false");

   return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            //onChangeInput(e);
            setSearchText(e.target.value);
          }}
        />
        <button onClick={()=>{
          if(searchClicked === "true"){
            setSearchClicked("false");
          }else{
            setSearchClicked("true");
          }
          
        }} >Button...</button>
        <p>{searchText}</p>
        <p>{searchClicked}</p>

      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
