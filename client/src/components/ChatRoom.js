import React, {Component} from "react";
import "./ChatRoom.css";
import ChatMessages from "./ChatMessages";
import ChatTextBox from "./ChatTextBox";

export default class ChatRoom extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="chat-room">
                <div className="chat-room-header">{this.props.match.params.room}</div>
                <div className="chat-room-content">
                    <ChatMessages />
                    <ChatTextBox/>
                </div>
            </div>
        );
    }
}
