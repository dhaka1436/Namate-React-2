import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props) {
        super(props);
        
    }
    render() {

        console.log("Parent Class Rendred");
        return (
            <div>
                <h1> About Class Component</h1>
                <h2> This is Web Show </h2>


                {/* <UserClass name = "Anoushka Himanshu Dhaka "/>
                <UserClass name = "Naina Himanshu Dhaka "/> */}
                <UserClass/>
            </div>
        );
    };
}
export default About;