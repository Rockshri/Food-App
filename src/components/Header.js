import React from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
// import { useSelector } from "react-redux";

const Header = ()=>{
     
    const data = useContext(UserContext);
    const {loggedInUser} = data;
    console.log(data);

    //Selectors of Redux : it is used to subscribing react to the store that means
    // react reads the live data from the app store using selector hook
    //  const cartItems = useSelector((store)=>store.cart.items);

    return(
        <div className="flex justify-between shadow-lg">
            <div className="w-20">
                <img
                className="w-20"
                src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-5">
                    <li className="px-2"><Link to={"/"}>Home</Link></li>
                    <li className="px-2"><Link to={"/about"}>About us</Link></li>
                    <li className="px-2"><Link to={"/contact"}>Contact us</Link></li>
                    <li className="px-2"><Link to={"/grocery"}>Grocery</Link></li>
                    {/* - ({cartItems.length}) */}
                    <li className="px-2 font-bold text-xl">Cart  </li>
                    <li className="px-2 ">{loggedInUser}</li>
                </ul>
            </div>
         </div>
        
    )
}

export default Header;