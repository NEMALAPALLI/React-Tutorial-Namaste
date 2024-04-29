import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestarauntMenu from "../utils/useRestarauntMenu";
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
 console.log(itemCards)
return  (
       <div className="menu">
        <h1>{name}</h1>
        <h2>{city}</h2>
       <h2> {cuisines.join(", ")}- {costForTwoMessage}</h2>
        <h2>Rating:{avgRating}</h2>
        <ul>
            {itemCards.map((item) =><li key={item.card.info.id}>{item.card.info.name}-{" "}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            
        </ul>
       </div>
    )
}
export default RestaurantMenu