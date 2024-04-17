import { useEffect } from "react";
const User = (props) => {

    const{name} = props;

    useEffect(()=>{

        

    },[])

    

    return (

        <div className="user-card">
            {console.log("render called " + name)};
            <h2> Name : Himanshu </h2>
            <h3> Location : Chd </h3>
            <h4> Contact : @dhaka_1808 </h4>
        </div>
    )
}

export default User;
