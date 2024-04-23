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
                <h1> About Class Component</h1>
                <div>
                    
                    <UserContext.Consumer>
                        {({loggedInUser}) =><h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2> This is Web Show </h2>


                {/* <UserClass name = "Anoushka Himanshu Dhaka "/>
                <UserClass name = "Naina Himanshu Dhaka "/> */}
                <UserClass/>
            </div>
        );
    };
}
export default About;