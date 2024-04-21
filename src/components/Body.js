import RestaurantCard from "./RestaurantCard";

import resOBJ from "../utils/mockData";
import { useState } from "react"; 
import { useEffect } from "react";
import { ShimmerComp } from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";






const Body = () => {

    // state variable i.e. more powerful react variable

    // Local State Variable
    
    // equivalent to let listOfRest;

    const [listOfRest , setListOfRest]  = useState([]); // this is array destructuring
    // argument is the list we want to store 

    const [filteredRest , setFilteredRest] = useState([]);

    const [searchText,setSearchText] = useState([""]);
    
    
    // Use effect hook ->
    
    useEffect(() => {
        fetchData();
    },[]); // will have 2 arguments first is arrow function
    // will be called once page has been rendered
    // fist one is cal back funcn and second is dependency array

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); // super power given to us by browsers

        // fetch will return us the promise
        const json = await data.json(); // converting it into json 

        // console.log(json);  
        setListOfRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // Prefer Optional Chaining
        setFilteredRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        
    };

    // normal JS Variable
    let listOfRestJS = [{
        "info": {
            "id": "373112",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "smqgbypnbivztchftkaa",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.8,
            "parentId": "4961",
            "sla": {
                "deliveryTime": 54,
            }
        }
    },{
        "info": {
            "id": "378112",
            "name": "Dominos",
            "cloudinaryImageId": "smqgbypnbivztchftkaa",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.8,
            "parentId": "4961",
            "sla": {
                "deliveryTime": 54,
            }
        }
    },
    {
        "info": {
            "id": "343112",
            "name": "A Square",
            "cloudinaryImageId": "smqgbypnbivztchftkaa",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4961",
            "sla": {
                "deliveryTime": 54,
            }
        }
    }
];

    // if(listOfRest.length == 0) {
    //     // return <h1> Loading... </h1>
        
    //     return <ShimmerComp/>
    // }// this is called as conditional endering

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1> You are Offline . Please Check Connection </h1>
        )
    }
 
    return listOfRest == 0 ? (<ShimmerComp/>) : (
        <div className="body">

            <div className="filter">

                <div className="Seach">
                    <input className="search-box" type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button type="submit" onClick={() => {
                        // I should filter the restaurants cards and update the UI
                        if(searchText.length == 0) {
                            setFilteredRest(listOfRest);
                        }
                        // filtering out as per search value
                        else {
                            const filteredRes = listOfRest.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRest(filteredRes);
                        }

                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={()=>{
                    
                    const filteredList = listOfRest.filter(res => res.info.avgRating >= 4.0);

                    // not a proper way to update the state variable
                    setListOfRest(filteredList); 
                    // need to call it with the updated name one

                }}> Top Rated Restaurants </button>
            </div>
            
            <div className="res-container">
                {/* <RestaurantCard resName = "Meghna Foods" cuisine = "Biryani, Asian, Norht India"/>
                <RestaurantCard resName = "KFC" cuisine = "Burger, Chicken, Fast Food"/> */}
                {/* above is sending the data normally and below when we get data from the backend*/ }
                {
                        filteredRest.map((restaurant) => (
                            <Link to={"/restaurant/"+restaurant.info.id} key = {restaurant.info.id} ><RestaurantCard resData = {restaurant}/></Link>
                        ))
                }
                {/* // key should be in parent JSX  */}
                
            </div>

            
        </div>
    )
}

export default Body;