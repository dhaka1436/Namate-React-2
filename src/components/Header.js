import { useState , useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    
    const [btnName,setBtn] = useState(["Log In"]);
    const onlineStatus = useOnlineStatus();

    

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} alt="logoimage"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "🟢":"🔴"}
                    </li>

                    <li>
                        <Link to = "/grocery">Grocery Store </Link>
                    </li>
                    <li>
                        <Link to="/" style={{backgroundColor : "orange" , textDecoration : "none" , color : "pink"}}> Home </Link>
                    </li>

                    <li>
                        <Link to="/about"> About Us </Link></li>
                    <li>
                        <Link to="/contact"> Contact us </Link>
                    </li>

                    <li>cart</li>

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
                </ul>

            </div>
        </div>
    )
};

