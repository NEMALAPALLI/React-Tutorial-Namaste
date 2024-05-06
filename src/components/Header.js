import { LOGO_URL } from "../utils/constants"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
const Header=()=>{
  const [btnName,setBtnName]= useState("Login")
    const onlineStatus=useOnlineStatus()
    const {loggedInUser}= useContext(UserContext)
    console.log("data:",loggedInUser)
//selector- access (subscribing)to store using the selector
const cartItems = useSelector((store)=>store.cart.items);
console.log(cartItems)
    return(
<>
    <div className="flex justify-between bg-blue-100 shadow-md mb-2 sm:bg-yellow-50 lg:bg-green-50">
     {/* <div className="header"> */}
      <div>
        <img className="w-56" alt="logo"src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
<ul className="flex p-4 m-4">
  <li className="p-4">Online Statues:{onlineStatus ? "🟢" : "🔴"}</li>
  <li className="p-4"><Link to="/">Home</Link></li>
  <li className="p-4"><Link to="/about">About Us</Link></li>
  <li className="p-4"><Link to="/contact">Contact Us</Link></li>
  
  <li className="p-4 font-bold"><Link to="/cart">Cart-({cartItems.length})Items </Link></li>
  <button className="login" onClick={()=>{ btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
  }}>{btnName}</button>
  <li className="p-4 font-bold">{loggedInUser}</li>
</ul>
      </div>

    </div>
</>
    )

}
export default Header