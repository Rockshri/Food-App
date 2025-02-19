import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

//Importing Provider from react redux which is act as bridge between
//react toolkit and react application.
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// import Grocery from "./components/Grocery"; 









//Concept of lazy loading 
const Grocery = lazy(()=>import("./components/Grocery"));

//React functional Element
const AppLayout = ()=>{
     
const [userName, setuserName] = useState();

    useEffect(()=>{
        const data = {
            name : "Shriyam singh",
        }
        setuserName(data.name);
        
 }, []);
      
     


    return(
        //here we r providing store to the app by using provider...
        <Provider store={appStore}>
          <UserContext.Provider value={ { loggedInUser : userName, setuserName } } >
                  <div className="app">
                    <Header/> 
                    <Outlet/>
{/* The <Outlet> component in React Router DOM is used to render child route elements within a parent route. 
This allows for nested UI to be displayed when child routes are rendered. If the parent route matches exactly, it will render a child index route or nothing if there is no index route
*/}
                   </div>
          </UserContext.Provider>
          </Provider> 

  
    )
}




const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },{
            path:"/about",
            element: <About/>,
        },{
            path:"/contact",
            element: <Contact/>,
        },{
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>,
        },{
            path:"/grocery",
            element:<Suspense fallback={<h1>loaaading</h1>}><Grocery/></Suspense>,
        }
    ],
        errorElement:<Error/>,
    }
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


