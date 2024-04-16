import { useEffect, useState } from "react";
import { Await, redirect } from "react-router-dom";
import { ShimmerComp } from "./shimmer";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();
    
    // Params is an Object

    useEffect(()=>{

        fetchMenu();

    },[])

    const fetchMenu = async () => {

        
        const data = await fetch(swiggy_menu_api_URL + resId);
        
        
        const json = await data.json();

        
        setResInfo(json.data);

        // I will need state variables here

    };

    if((resInfo === null)) return <ShimmerComp/>;

    
    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    console.log(itemCards);


    return (
        <div>
            <h1> {name} </h1>
            
            <p>{cuisines.join(', ')} - {costForTwoMessage} </p>
            <h2> Menu </h2>
            
            <ul>
                {
                    itemCards.map((item) => (<li key={item.card.info.id}> {item.card.info.name} - Rs. {item.card.info.price/100} </li>))
                }
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li> */}

                
            </ul>
        </div>
    );
}

export default RestaurantMenu;