import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";

import resOBJ from "../utils/mockData";
import { useState, useContext } from "react"; 
import { useEffect } from "react";
import { ShimmerComp } from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";






const Body = () => {

    // state variable i.e. more powerful react variable

    // Local State Variable
    
    // equivalent to let listOfRest;

    const [listOfRest , setListOfRest]  = useState([]); // this is array destructuring
    // argument is the list we want to store 

    const [filteredRest , setFilteredRest] = useState([]);

    const [searchText,setSearchText] = useState([""]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    
    
    // Use effect hook ->
    
    useEffect(() => {
        fetchData();
    },[]); // will have 2 arguments first is arrow function
    // will be called once page has been rendered
    // fist one is cal back funcn and second is dependency array

    const fetchData = async () => {
        const data =
            await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); // super power given to us by browsers

        // fetch will return us the promise
        const json = await data.json(); // converting it into json 

        // console.log(json);  
        setListOfRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // Prefer Optional Chaining
        setFilteredRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        
    };

   


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1> You are Offline . Please Check Connection </h1>
        )
    }

    const {loggedInUser,setUserName} = useContext(UserContext);
  
    return listOfRest == 0 ? (<ShimmerComp/>) : (
        <div className="body">

            <div className="filter flex">

                <div className="Seach m-4 p-4">
                    
                    <input
                        className="search-box border border-solid border-black" 
                        type="text" value={searchText} onChange={(e)=>{

                        setSearchText(e.target.value);
                    }}/>

                    <button 
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                        type="submit" onClick={() => {
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

                <div className="Seach m-4 p-4 flex items-center">
                    <button 
                        className="filter-btn m-4 p-4 bg-gray-100 rounded-lg" 
                        onClick={()=>{
                        
                        const filteredList = listOfRest.filter(res => res.info.avgRating >= 4.0);

                        // not a proper way to update the state variable
                        setListOfRest(filteredList); 
                        // need to call it with the updated name one

                        }}> Top Rated Restaurants </button>
                </div>

                {/* <div className="Seach m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black px-2 mx-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div> */}

            </div>
            
            <div className="res-container flex flex-wrap">
                
                {
                        filteredRest.map((restaurant) => (
                            
                            <Link 
                                to={"/restaurant/"+restaurant.info.id}
                                key = {restaurant.info.id} 
                            >

                                
                                {restaurant.info.avgRating >= 4.5 ? (<RestaurantCardPromoted resData = {restaurant}/>) : (<RestaurantCard resData = {restaurant}/>)}
                                
                                
                            </Link>
                        ))
                }
                
            </div>

            
        </div>
    )
}

export default Body;