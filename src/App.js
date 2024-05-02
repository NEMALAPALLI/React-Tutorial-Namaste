import React, { useEffect, useState } from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
const AppLayout=()=>{
const [userName,setUserName]= useState();
//authentication
useEffect(()=>{
//make an api call and send username and password
const data= {
  name:"Bharath kumar"
}
setUserName(data.name)
},[])

  return(
    <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
<div className="app">
  <Header/>
  <Outlet/>

</div>
</UserContext.Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      // resId is dynami id for each restaruant
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>
    }
    ],
    errorElement:<Error/>
  },
 
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);