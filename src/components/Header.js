import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header=()=>{
  const [btnName,setBtnName]= useState("Login")
    const onlineStatus=useOnlineStatus()
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
  <li className="p-4">Cart</li>
  <button className="login" onClick={()=>{ btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
  }}>{btnName}</button>
</ul>
      </div>

    </div>
</>
    )

}
export default Header