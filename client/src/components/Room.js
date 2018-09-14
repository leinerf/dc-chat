import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import "./Room.css";
import {Redirect} from "react-router-dom"
class Room extends Component{
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
            <div className="Room" onClick={this.renderRedirect}></div>
        )
    }
}

export default withRouter(Room)