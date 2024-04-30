import { CDN_URL } from "../utils/constants";

const Restaurantcard=(props)=>{
    const {resName} = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resName?.info;
    return(
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
        <img className="rounded-lg" alt="image" src={CDN_URL+ cloudinaryImageId}/>
        {/* <img className="res-logo" alt="image" /> */}
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  }
  export default Restaurantcard