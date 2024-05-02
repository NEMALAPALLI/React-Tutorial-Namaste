import Restaurantcard from "./RestaurantCard"
 import { useContext, useEffect, useState } from "react"
 import Shimmer from "./Shimmer";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
 const Body =()=>{
  const [ listOfRestaurants,setListOfResturant]= useState([])
  const [filteredRestaurant, setFilteredRestaurant]= useState([])
  const [searchText,setSearchText]= useState("")
  // let listOfRestaurants2=[
  //   {
  //     "info": {
  //       "id": "56428",
  //       "name": "Puliyogare Point",
  //       "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
     
  //       "costForTwo": "₹150 for two",
  //       "cuisines": [
  //         "South Indian"
  //       ],
  //       "avgRating": 4.6,
  //       "avgRatingString": "4.6",
    
  
     
          
           
  //         }
  //       },
  //       {
  //         "info": {
  //           "id": "56429",
  //           "name": "Domions",
  //           "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
         
  //           "costForTwo": "₹150 for two",
  //           "cuisines": [
  //             "South Indian"
  //           ],
  //           "avgRating": 3.8,
  //           "avgRatingString": "4.6",
        
      
         
              
               
  //             }
  //           }, 
  //           {
  //             "info": {
  //               "id": "56429",
  //               "name": "MCDomions",
  //               "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
             
  //               "costForTwo": "₹150 for two",
  //               "cuisines": [
  //                 "South Indian"
  //               ],
  //               "avgRating": 4.8,
  //               "avgRatingString": "4.6",
            
          
             
                  
                   
  //                 }
  //               }, 

  // ]
  // console.log("Bondy rendere:",listOfRestaurants)
  useEffect(()=>{
    fetchData();

  },[])
  const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=t")
    const json= await data.json();

    console.log(json)
    // optional chaning
    setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
  // onlien status

  const onlineStatus = useOnlineStatus()
  if(onlineStatus===false) return <h1>your lost the internet connection..please check the internet connection...</h1>
  // if(listOfRestaurants.length ===0){
  //   return <Shimmer/>
  // }


  const {loggedInUser,setUserName}= useContext(UserContext)
   return listOfRestaurants.length ===0 ?<Shimmer/> :(
      <div className="body">
        {/* //search */}
        <div className="flex">
        <div className="search p-4 m-4">
          <input type="text" 
          className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"onClick={()=>{
            //filter the restuarant cards and update the ui
            console.log(searchText)
         const filtered= listOfRestaurants.filter(
          (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
         setFilteredRestaurant(filtered)
         }}>search</button>
        </div>
<div className="p-4 m-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg"
          
          onClick={()=>{
            // console.log("button clicked")
           const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRating >4.5);
            setListOfResturant(filteredList)}}>Top Rated Restaurants</button>
       </div>
       <div className="p-4 m-4 flex items-center">
        <label>User Name:</label>
        <input className="border border-black p-2" 
        value={loggedInUser}
        onChange={(e)=> setUserName(e.target.value)}/>
</div>
        </div>
  {/* restuarnt card */}
  <div className="flex flex-wrap">
 
  {/* {
    listOfRestaurants.map(restaurant => <Restaurantcard  key={restaurant.info.id} resName={restaurant}/>)
  } */}

{
    filteredRestaurant.map(restaurant =>
      <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> <Restaurantcard  resName={restaurant}/></Link>)
  }
  
  </div>
  
      </div>
    )
  }
  export default Body