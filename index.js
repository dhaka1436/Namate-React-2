import ReactDOM from "react-dom/client";
import React , {lazy, Suspense, useEffect, useState} from "react";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { ShimmerComp } from "./components/shimmer";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const Grocery = lazy(()=> import( "./components/Grocery"))


const AppLayout = () => {

    // autehntication
    const[userName,setUserName] = useState();

    useEffect(()=>{
        // Make an API call and send username and password and got the data
        const data = {
            name : "Himanshu Dhaka"
        }
        setUserName(data.name);
    })

    return (
        
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
            <div className = "app">
                <Header/>
            
                <Outlet/>

                <Footer/>
            
            </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path : "/about",
                element : <About/>,
            },
            {
                path : "/contact",
                element : <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element : <RestaurantMenu/>,
                
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading </h1>}><Grocery/></Suspense>,
            },
            {
                path :"/cart",
                element : <Cart/>
            }
        ],
        errorElement : <Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

