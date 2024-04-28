import { useEffect } from "react";
const User = (props) => {

    const{name} = props;

    useEffect(()=>{

        

    },[])

    

    return (

        <div className="user-card">
            
            <h2> Name : Himanshu Anoushka</h2>
            <h3> Location : Chandigarh </h3>
            <h4> Email : himanshudhaka987@gmail.com</h4>
            <h4> Contact No. : +91 7973537221 </h4>
        </div>
    )
}

export default User;
