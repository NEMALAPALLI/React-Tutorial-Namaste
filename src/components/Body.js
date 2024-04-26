import Restaurantcard from "./RestaurantCard"
 import { useEffect, useState } from "react"
 import Shimmer from "./Shimmer";
 import { Link } from "react-router-dom";
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
  // if(listOfRestaurants.length ===0){
  //   return <Shimmer/>
  // }
   return listOfRestaurants.length ===0 ?<Shimmer/> :(
      <div className="body">
        {/* //search */}
        <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={()=>{
            //filter the restuarant cards and update the ui
            console.log(searchText)
         const filtered= listOfRestaurants.filter(
          (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
         setFilteredRestaurant(filtered)
         }}>search</button>
        </div>

          <button className="filer-btn"
          
          onClick={()=>{
            // console.log("button clicked")
           const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRating >4.5);
            setListOfResturant(filteredList)}}>Top Rated Restaurants</button>
        </div>
  {/* restuarnt card */}
  <div className="res-container">
 
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