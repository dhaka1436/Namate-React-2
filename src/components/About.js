import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props) {
        super(props);
        
    }
    render() {

        return (
            <div>
                
                <div>
                    
                    <UserContext.Consumer>
                        {({loggedInUser}) =><h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>


                {/* <UserClass name = "Anoushka Himanshu Dhaka "/>
                <UserClass name = "Naina Himanshu Dhaka "/> */}
                <User/>
            </div>
        );
    };
}
export default About;