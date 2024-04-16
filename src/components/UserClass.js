// writing code using class based component

import React from "react";
// this React.component is there inside react fxn 

class UserClass extends React.Component {

    render() {
        return (
            <div className="user-card">
                <h2> Name : Himanshu </h2>
                <h3> Location : Chd </h3>
                <h4> Contact : @dhaka_1808 </h4>
            </div>
        );
    }
}

export default UserClass;