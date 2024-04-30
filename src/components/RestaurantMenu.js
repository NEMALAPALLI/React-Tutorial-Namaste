import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
    // const [resInfo,setResInfo]= useState(null)
    const {resId}= useParams()

    const resInfo= useRestarauntMenu(resId);
    // useEffect(()=>{
    //    fetchMenu(); 
    // },[])
    // const fetchMenu= async ()=>{
    //     const data = await fetch(MENU_API+resId)
    //     const json=await data.json();
    //     console.log(json)
    //     setResInfo(json.data)
    // }
    if(resInfo === null) return <Shimmer/>;
    const {name,city,cuisines,avgRating,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info

 const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
//  console.log("resInfo",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
//  console.log("categoires",categories)
return  (
       <div className="text-center ">
        <h1 className="font-bold my-10 text-2xl">{name}</h1>
        {/* <h2>{city}</h2> */}
       <p className="font-bold text-lg"> {cuisines.join(", ")}- {costForTwoMessage}</p>
        

        {/* categories accordions */}

        {categories.map((category) => (
        <RestaurantCategory  key={category?.card?.card?.title}data={category?.card?.card}/>
        ))}
       </div>
    )
}
export default RestaurantMenu