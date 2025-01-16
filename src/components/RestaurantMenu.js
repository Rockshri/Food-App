import { useEffect, useState } from "react";
import Shimmers from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
//   



const RestaurantMenu = ()=>{
    //    const [resMenu, setResMenu] = useState(null);
       const params = useParams();
       const {resId} = params;
       console.log(params);

       const resMenu = useRestaurantMenu(resId);
       
       const [showIndex, setshowIndex] = useState(null);

    //    useEffect(()=>{
    //        fetchMenu();
    //    },  [])
    //    const fetchMenu =async()=>{
    //     const data = await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
    //     const json = await data.json();
    //     console.log(json.data);

    //     setResMenu(json.data);
        
    //    }

    const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //here i am using bracket notation to access the key value pair of object, bcoz key of the object has special character i.e @type
    console.log(categories);
    

       if(resMenu === null){
        return <Shimmers/>
       }

      const {name, city, costForTwoMessage, cuisines} = resMenu?.cards[2]?.card?.card?.info;
      const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="text-center">
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
          {/* <h2>Menu</h2> */}
           {/* {itemCards.map((item)=>{
                return (
                    <li key={item.card.info.id}>  {item.card.info.name}  :  Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
                )
            })} */}

            {categories.map((category, id)=> ( 
                //controlled component
                <RestaurantCategory 
                key={id} 
                data={ category?.card?.card }
                showItems={ id===showIndex ? true : false }
                setshowIndex={ ()=>setshowIndex(id) }
                setnotShow={()=>setshowIndex(null)}  />
                
                ))};
          
        </div>
    )
}

export default RestaurantMenu;