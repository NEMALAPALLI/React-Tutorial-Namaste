import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props)
        this.state={
            count:0,
        }
    }
    render(){
        return(
            <div className="user-card">
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1
                    })
                }}>Cout increase</button>
                {/* <h1>Name:{this.props.name}</h1> */}
            {/* <h3>Location:{this.props.location}</h3> */}
            {/* <h3>Contact:nbk@gmail.com</h3> */}
            </div>
        )
    }
}
export default UserClass