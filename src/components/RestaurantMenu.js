import { Await, redirect } from "react-router-dom";
import { ShimmerComp } from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const dummy = "Dummy Data";

    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(0);

    // Restaurant menu won't care about implementation of this hook
    // doesn't care about how we are fetching the data

    
    // Params is an Object

    if((resInfo === null)) {
        console.log("null returned");
        return <ShimmerComp/>;
    }
    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    

    const categories = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => 
                c.card.card["@type"] ===
                'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl"> {name} </h1>
            
            <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage} </p>
            
            {/*Categoreis accodion */}

            {
                categories.map((category,index) => (
                    <RestaurantCategory 
                        key = {category.card.card.title} 
                        data = {category?.card?.card} 
                        showItems={index === showIndex && true}
                        setIndex = {() => setShowIndex(index)}
                        dummy = {dummy}
                    />
                ))
            }
            
        </div>
    );
}

export default RestaurantMenu;