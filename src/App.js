import React from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
// Restuarantcard start

// siwggy api
// const resObj=
  
//         {
//           "info": {
//             "id": "108109",
//             "name": "Kabab Magic",
//             "cloudinaryImageId": "n2kdrmerp4xec1sxb3sw",
//             "locality": "RV ROAD",
//             "areaName": "Basavanagudi",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//               "Chinese",
//               "South Indian",
//               "Mexican",
//               "Kerala"
//             ],
//             "avgRating": 4.3,
//             "parentId": "527",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "promoted": true,
//             "adTrackingId": "cid=12601762~p=0~adgrpid=12601762#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=108109~eid=208aead1-91b5-428a-a5d6-5acdc59f373c~srvts=1712854597609~collid=45995",
//             "sla": {
//               "deliveryTime": 31,
//               "lastMileTravel": 5,
//               "serviceability": "SERVICEABLE",
//               "slaString": "30-35 mins",
//               "lastMileTravelString": "5.0 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//               "nextCloseTime": "2024-04-11 23:00:00",
//               "opened": true
//             },
//             "badges": {
              
//             },
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {
              
//             },
//             "type": "F",
//             "badgesV2": {
//               "entityBadges": {
//                 "textExtendedBadges": {
                  
//                 },
//                 "textBased": {
                  
//                 },
//                 "imageBased": {
                  
//                 }
//               }
//             },
//             "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {
                  
//                 },
//                 "video": {
                  
//                 }
//               }
//             },
//             "reviewsSummary": {
              
//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {
              
//             },
//             "externalRatings": {
//               "aggregatedRating": {
//                 "rating": "--"
//               }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//           },
//           "analytics": {
            
//           },
//           "cta": {
//             "link": "swiggy://menu?restaurant_id=108109",
//             "text": "RESTAURANT_MENU",
//             "type": "DEEPLINK"
//           }
//         }


    
  
// Restuarnt card end
//Body start

//Body End
const AppLayout=()=>{
  return(
<div className="app">
  <Header/>
  <Body/>
</div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);