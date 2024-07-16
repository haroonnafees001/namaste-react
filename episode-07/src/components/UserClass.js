import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.state ={
            count: 0,
            count2:121
        }
    }

    render() {

        const {name , location} = this.props;
        return (
            <div className="user-card">
                <div>Count: {this.state.count}</div>
                <div>Name: {name}</div>
                <div>Location:{location}</div>
                <div>Contact:/@nfs-haroon</div>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1
                    })
                }
                }>Increase Counter</button>
            </div>
        );
    }
}
export default UserClass