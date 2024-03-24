import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=200"
    />
  </a>
);

//React Component Functional
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList=
[
  {
    "data": {
      "id": "43836",
      "name": "McDonald's",
      "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
      "locality": "MG Road",
      "areaName": "Ashok Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-25 03:00:00",
        "opened": true
      },
      
      "isOpen": true,
      "type": "F",
      
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM"
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    }
  },
  {
    "data": {
      "id": "77949",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Gandhi Bazar",
      "areaName": "Basavanagudi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-25 04:00:00",
        "opened": true
      },
      
      "isOpen": true,
      "type": "F",
      
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    }
  },
  {
    "data": {
      "id": "17301",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Vani Vilas Road",
      "areaName": "Basavanagudi",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-25 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    }
  },
  {
    "data": {
      "id": "23846",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Rehinus Street",
      "areaName": "Richmond Town",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-25 02:59:00",
        "opened": true
      },
      "isOpen": true,
      "type": "F",
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    }                  
  },
  {
    "data": {
      "id": "124178",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
      "locality": "Lavelle Road",
      "areaName": "Central Bangalore",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "parentId": "195515",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-24 23:59:00",
        "opened": true
      },
    
      "isOpen": true,
      "type": "F",
      
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    }
  
  }
];

const RestaurantCard=(props1)=>{
  console.log([props1.restaurant.data.name]);  
  return (
    <div className="card" >
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props1.restaurant.data.cloudinaryImageId} ></img>
        {/* <h2>{console.log(restaurantList[0].data.name)}</h2> */}
        <h2>{props1.restaurant.data.name}</h2>
        
        <h3>{props1.restaurant.data.cuisines.join(', ')}</h3>
        <h4>{props1.restaurant.data.avgRating} *</h4>
    </div>
    )
}

//props = properties
const Body = () => {
  return (
    <div className="restaurant-list">
    <RestaurantCard restaurant={restaurantList[0]} />
    <RestaurantCard restaurant={restaurantList[1]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    <RestaurantCard restaurant={restaurantList[2]} />
    
    </div>
  );
};

const Footer = () => {
  return(
  <>
  <h4>Footer</h4>
  
  </>
  );

};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

//single line comment
/*
        header
            logo
            nav items
            cart
        body 
            search bar
            restaurant list
                restaurant card
                    image
                    name
                    rating
                    cusines

        footer
            links
            copyright
        */
