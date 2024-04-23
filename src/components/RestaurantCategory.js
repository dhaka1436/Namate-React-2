import ItemList from "./ItemList";




const RestaurantCategory = (props) => {
    
    

    const handleClick = () => {
        
        console.log("clicked");
    }


    const {title} = props?.data;
        return (
        <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-4">
            {/* We will have a accodion body and it's header */}
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg">{title} ({props.data.itemCards.length})</span>
                <span> 🔻 </span> 
            </div>

            <ItemList items = {props?.data?.itemCards}/>

        </div>
    )
}


export default RestaurantCategory;