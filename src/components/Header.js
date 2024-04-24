import { useState , useEffect, useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    
    const [btnName,setBtn] = useState(["Log In"]);

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a selector

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-200">
            <div className="logo-container">
                <img className="logo w-56 " src = {LOGO_URL} alt="logoimage"/>
            </div>

            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> 
                        Online Status : {onlineStatus ? "🟢":"🔴"}
                    </li>

                    <li className="px-4">
                        <Link to = "/grocery">Grocery Store </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/" style={{}}> Home </Link>
                    </li>

                    <li className="px-4">
                        <Link to="/about"> About Us </Link></li>
                    <li>
                        <Link to="/contact"> Contact us </Link>
                    </li>

                    <li className="px-4 font-bold text-xl">
                        <Link to = "/cart">Cart ({cartItems.length} items)</Link>
                    </li>

                    {/* <li className="log-in"><button type="submit" onClick={()=>{
                        if(btnName == "Log In") {setBtn(["Log Out"]);}
                        else {setBtn(["Log In"]);}
                    }}> {btnName} </button></li> */}

                    <li className="log-in">
                        <button type="submit" onClick={()=>{
                            if(btnName == 'Log In') {setBtn("log Out");}
                            else {setBtn("Log In");}
                        }}>
                            {btnName}
                        </button>
                    </li>

                    <li className="px-4 font-bold"> {loggedInUser} </li>

                </ul>

            </div>
        </div>
    )
};

