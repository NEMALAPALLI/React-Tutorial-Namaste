import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data})=>{
    const [showItems, setShowItems]= useState(false)
    const handleClick=()=>{
        setShowItems(!showItems)
    }
    console.log(data)
    return(
<div>
{/* Accordion header */}
<div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 ">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
    <span className="font-bold">{data.title}-({data.itemCards.length})</span>
    <span>⬇️</span>
    </div>
   { showItems && <ItemList items={data.itemCards}/>}

</div>
{/* Accordion body */}
</div>
    )
}
export default RestaurantCategory