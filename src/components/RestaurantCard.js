import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const RestaurantCard = (props) => {

    console.log(props);
    const {resData} = props; // destructuring of the Props

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
      } = resData?.info;

      const {deliveryTime} = resData.info?.sla;
      
      console.log(name+cloudinaryImageId);

    return (
        
        <div className="res-card" style={{
            backgroundColor : "#f0f0f0",
            // if we want to paas a javascript object then first define all things 
            // required and then we ca simply pass it inside the curley braces

        }}>
            <img className="res-logo"
            alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3> {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating} </h4>
            <h4> {deliveryTime + " minutes"} </h4>
            <h4> {costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;