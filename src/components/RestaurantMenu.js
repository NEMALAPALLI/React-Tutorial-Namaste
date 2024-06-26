import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
    const {resId}= useParams()

    const resInfo= useRestarauntMenu(resId);
    const [showIndex,setShowIndex]= useState(null)
  
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

        {categories.map((category,index) => (
            //controlled component
        <RestaurantCategory  key={category?.card?.card?.title}data={category?.card?.card}
       //resturant category collapse and expan should be control by restarant menu
        showItems={index === showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}/>
      ))}
       </div>
    )
}
export default RestaurantMenu