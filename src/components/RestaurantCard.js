import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{
    const { resData } = props;
    // console.log(resData);
    
    const { name, cuisines, avgRating, costForTwo } = resData?.info;  //optional chaining and object destructuring....
    const data = useContext(UserContext);
    const { loggedInUser } = data;
    
    
    return(
     <div data-testid = "resCard" className="m-4 p-4 w-[250px] border bg-slate-300 rounded-lg hover:bg-slate-500">
        <img className="rounded-lg" src={CDN_URL+ resData.info.cloudinaryImageId}></img>
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <h4>{cuisines.join(", ")}</h4> 
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{loggedInUser}</h4>
     </div>
    );
};





//Higher order componants return componants 
export const withOfferLabel = ( RestaurantCard )=>{
    //here it is returning the componants
    return (props)=>{
        // const {resdata} = props;
        // const {} = resdata?.info;
            return(
                <div >
                    <label className="relative top-72 mx-8 bg-transparent text-blue-900 font-bold text-[20px]">10% off upto Rs. 999</label>
                    <RestaurantCard {...props}/>
                </div>
            )
    }
}

export default RestaurantCard;