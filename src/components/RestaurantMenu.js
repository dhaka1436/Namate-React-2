import { Await, redirect } from "react-router-dom";
import { ShimmerComp } from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    // Restaurant menu won't care about implementation of this hook
    // doesn't care about how we are fetching the data

    
    // Params is an Object

    if((resInfo === null)) {
        console.log("null returned");
        return <ShimmerComp/>;
    }

    
    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


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