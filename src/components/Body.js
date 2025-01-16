import { useContext, useEffect, useState } from "react";
import React from "react";
import { SWIGGY_API_URL } from "../utils/constant";
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import Shimmers from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredlist, setfilteredlist] = useState([]);

  const [searchtext, setSearchtext] = useState("");

  const RestaurantCardOffer = withOfferLabel(RestaurantCard);
  
  const data = useContext(UserContext);
  const {loggedInUser, setuserName} = data;


  useEffect(() => {
    console.log("fetching under use effect");

    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(SWIGGY_API_URL);
    console.log(data);
    const json = await data.json();
    console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function clickhandler() {
    let ratingList = listofRestaurant.filter((res) => {
      return res.info.avgRating > 4.2;
    });
    setfilteredlist(ratingList);
  }

  let useonlinestatus = useOnlineStatus();
  console.log(useonlinestatus);
  if (useonlinestatus === "false") {
    return <h1>Look like you are offline!!! Check your Internet Connection</h1>;
  }

  //    if(listofRestaurant.length==0){
  //     return <Shimmers/>
  // }
  return listofRestaurant && listofRestaurant.length == 0 ? (
    <Shimmers />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="px-5 py-2 bg-blue-600 m-2 rounded-md "
            onClick={() => {
              console.log(searchtext);

              const newfilterList = listofRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              });

              setfilteredlist(newfilterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-5 py-2 bg-green-500 m-2 rounded-lg"
          onClick={clickhandler}
        >
          Top Rated Restaurants
        </button>
         <label className="my-auto">Enter name</label>
         <input type="text" className="border-black border-2" onChange={ (e)=>setuserName(e.target.value) }></input>
      </div>

      <div className="flex flex-wrap">
        {filteredlist?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {Object.keys(
                restaurant.info.aggregatedDiscountInfoV3 ||
                  restaurant.info.aggregatedDiscountInfoV2
              ).length !== 0 ? (
                <RestaurantCardOffer resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
