// writing code using class based component

import React from "react";
// this React.component is there inside react fxn 

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
            },
        };
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/dhaka1436");
        const json = await data.json();

        console.log(json);

        this.setState ({

            userInfo : json,
        });

        console.log("Component Updation going on");  
    }

    componentDidUpdate() {
        console.log("state variable has been updated");
    }

    render() {

        const {name,location,company,avatar_url} = this.state.userInfo;
       

        return (
            <div className="user-card">
                
                <img src = {avatar_url}/>
                <h2> Name : {name} </h2>

                <h3> Location : {location} </h3>
                <h4> Organisation : {company} </h4>
            </div>
        );
    }
}

export default UserClass;