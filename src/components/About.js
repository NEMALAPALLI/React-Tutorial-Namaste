import User from "./User"
import UserClass from "./UserClass"

const About=()=>{
    return(
        <div>
            <h1>About page</h1>
            {/* <User name={"Nemalapalli"} location={"Hyderabad"}/> */}
            <UserClass name={"Dachapalli"} location={"Tadapalligudam"}/>
        </div>
    )
}
export default About