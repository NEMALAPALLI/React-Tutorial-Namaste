import Restaurantcard from "./RestaurantCard"
 import resList from "../utils/mockData"
 import { useState } from "react"
const Body =()=>{
  const [ listOfRestaurants,setListOfResturant]= useState(resList)
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
   return(
      <div className="body">
        {/* //search */}
        {/* <div className="search">Search</div> */}
        <div className="filter">
          <button className="filer-btn"
          
          onClick={()=>{
            // console.log("button clicked")
           const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating >4);
            setListOfResturant(filteredList)}}>Top Rated Restaurants</button>
        </div>
  {/* restuarnt card */}
  <div className="res-container">
  {/* <Restuarantcard resName="Meghana FoodS" cuisine="Biryani,NorthIndia,Asian"/> */}
  {/* <Restuarantcard resName="KFC" cuisine="Burger,Chicken,Pizza"/> */}
  {/* <Restuarantcard resName={resList[0]}/>
  <Restuarantcard resName={resList[1]}/>
  
  <Restuarantcard resName={resList[2]}/> */}
  {
    listOfRestaurants.map(restaurant => <Restaurantcard  key={restaurant.info.id} resName={restaurant}/>)
  }
  
  </div>
  
      </div>
    )
  }
  export default Body