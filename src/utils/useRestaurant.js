import { useState, useEffect } from "react";


const useRestaurant = ()=>
    {
        const [restaurant, setRestaurant] = useState(null);

        useEffect(() => {
            getRestaurantInfo();
        }, []);

        async function getRestaurantInfo() {
            const data = await fetch(
              "https://raw.githubusercontent.com/kapilepatel/react-learn/main/src/dummyData/restaurantInfo.json"
              //+ id
            );
            const json = await data.json();
            console.log(json);
            json?.menu?.map((item, index) => {
              console.log(item.name);
            });
        
            setRestaurant(json);
          }
          return restaurant;
    }

    export default useRestaurant;