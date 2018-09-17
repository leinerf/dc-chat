import React, {Component} from "react";
import "./ChatRoom.css";
import ChatMessages from "./ChatMessages";
import ChatTextBox from "./ChatTextBox";

export default class ChatRoom extends Component {
    constructor(props){
        super(props);
        this.renderRedirect = this.renderRedirect.bind(this);
    }
    renderRedirect = () => {
        return this.props.history.push("/")
    }
    render(){
        return (
            <div id="chat-room">
                <div className="chat-room-header">{this.props.match.params.room} <span onClick={this.renderRedirect}>x</span></div>
                <div className="chat-room-content">
                    <ChatMessages />
                    <ChatTextBox/>
                </div>
            </div>
        );
    }
}
