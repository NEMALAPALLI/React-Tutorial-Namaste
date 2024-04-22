import { CDN_URL } from "../utils/constants";

const Restaurantcard=(props)=>{
    const {resName} = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resName?.info;
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" alt="image" src={CDN_URL+ cloudinaryImageId}/>
        {/* <img className="res-logo" alt="image" /> */}
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  }
  export default Restaurantcard