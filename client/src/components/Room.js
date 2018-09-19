import React, {Component} from "react";
import "./Room.css";
export default class Room extends Component{
    constructor(props){
        super(props);
        
    }

    setRedirect = () => { 
        this.setState({redirect: true})
    }
    renderRedirect = () => {
      return this.props.history.push(`${this.props.name}`)
    }
    render(){
        return (
            <div className="Room" onClick={this.renderRedirect}>
                <div className="Room-title">{this.props.name}</div>
            </div>
        )
    }
}

