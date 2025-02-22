import { useState } from "react";
import Itemcards from "./Itemcards";

const RestaurantCategory = (props)=>{
     const {data, showItems, setshowIndex, setnotShow} = props;
    //  const [showitem, setShowitem] = useState(false);
     


    function clickHandler(){
        //toggling effect
        console.log("clicked");
        // setShowitem(!showitem);
        
        
        setshowIndex();


        if(showItems){
            setnotShow();
        }

        
    }
     
    return(
        <div>
            {/* Accordian Header */}
          <div className="w-6/12 bg-slate-300 shadow-lg p-4 mx-auto my-2 rounded">
            <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span className="font-bold">{showItems ?"⬆️":"⬇️"}</span>
            </div>

            {/* Accordian Body */}
            {
              showItems && <Itemcards list={data.itemCards}/>
            }
          </div>
          
          
        </div>
    )
}

export default RestaurantCategory;