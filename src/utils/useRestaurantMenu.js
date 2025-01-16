import React, { useEffect, useState } from "react";
import { MENU_URL } from "./constant";


const useRestaurantMenu= (resId)=>{

    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },  [])


    
      
    const fetchMenu =async()=>{
     const data = await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
     const json = await data.json();
     console.log(json.data);

     setResMenu(json.data);
     
    }

    return resMenu;

}

export default useRestaurantMenu;