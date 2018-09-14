import React, { Component } from 'react';
import './Main.css';
import Room from "./Room"
import {Route, Switch} from "react-router-dom";
import ChatRoom from "./ChatRoom";

const Main = (props) => {
    return (
            <Switch>
                <Route exact path={"/"} render={(props) => {
                    return (
                    <div id="rooms-section">
                        <Room name="watch-tower"/>
                        <Room name="batcave"/>
                        <Room name="titans-tower"/>
                        <Room name="fortress-of-solitude"/>
                        <Room name="atlantis"/>
                    </div>
                    )
                }}/>
                <Route exact path={"/:room"}  render={(props) => <ChatRoom {...props}/>}/> 
            </Switch>      
    );
}

export default Main;
