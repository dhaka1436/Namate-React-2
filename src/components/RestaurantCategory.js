import { useState } from "react";
import ItemList from "./ItemList";




const RestaurantCategory = ({data,showItems,setIndex,dummy}) => {

    const handleClick = () => {
        setIndex();
    }
    
    const {title} = data;
        return (
        <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-4">
            {/* We will have a accodion body and it's header */}

            <div 
                className="flex justify-between cursor-pointer" 
                onClick={handleClick} 
            >
                
                <span className="font-bold text-lg">{title} ({data.itemCards.length})</span>
                
                <span> 🔻 </span> 
            
            </div>

            {showItems && <ItemList items = {data?.itemCards} dummy = {dummy}/>}

        </div>
    )
}


export default RestaurantCategory;