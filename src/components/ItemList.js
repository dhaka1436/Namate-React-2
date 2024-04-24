import { useDispatch } from "react-redux";
import { CDN_URL} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items,dummy}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // want to dispatch an action
        dispatch(addItem(item));

    } 
    
    return (
        <div>
            
            {items.map(item => (

                <div key = {item.card.info.id} className="p-2 m-2 border-gray-500 border-b-[1px] text-left flex ">
                    
                    <div className="w-9/12">
                        <div className="py-2">
                        
                            <span>{item.card.info.name}</span>
                        
                            <span> Rs. {item.card.info.price/100}</span>
                    
                        </div>
                    
                        <p className="text-xs"> {item.card.info.description} </p>
                        
                    </div>

                    <div className="w-3/12 p-4">

                        <div className="absolute">
                            <button 
                                className="p-2 mx-16 bg-black text-white shadow-lg rounded-md"
                                onClick={() => handleAddItem(item)}
                            >
                                    Add + 
                            </button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} alt={item.card.info.name} />

                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default ItemList;