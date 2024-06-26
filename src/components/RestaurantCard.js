import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const RestaurantCard = (props) => {

   
    const {resData} = props; // destructuring of the Props

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
      } = resData?.info;

      const {deliveryTime} = resData.info?.sla;
      
      

    return (
        
        <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400" style={{
            // if we want to paas a javascript object then first define all things 
            // required and then we ca simply pass it inside the curley braces

        }}>
            <img className="res-logo rounded-lg"
            alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg"> {name} </h3>
            <h4 className=""> {cuisines.join(", ")} </h4>
            <h4> {avgRating} </h4>
            <h4> {deliveryTime + " minutes"} </h4>
            <h4> {costForTwo}</h4>
        </div>
    )
}

// higher order component

// input is the restaurant card ==>> Restaurant Card Promoted

export const withPromotedLabel = (RestaurantCard) => {

    return (props) => {
        
        return (
            <div>
            
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            
            {<RestaurantCard {...props}/>}
            
            </div>
        )
    }
}



export default RestaurantCard;