import React, { Component } from 'react';
import './Main.css';
import Room from "./Room"
import {Route, Switch} from "react-router-dom";
import ChatRoom from "./ChatRoom";
import AuthForm from "./AuthForm";

const Main = (props) => {
    return (
            <Switch>
                <Route exact path={"/"} render={(props) => {
                    return (
                    <div id="rooms-section">
                        <Room {...props} name="watch-tower"/>
                        <Room {...props} name="batcave"/>
                        <Room {...props} name="titans-tower"/>
                        <Room {...props} name="fortress-of-solitude"/>
                        <Room {...props} name="atlantis"/>
                    </div>
                    )
                }}/>
                <Route exact path={"/signup"} render={(props) => <AuthForm {...props} header="signup" signUp buttonText="Sign Up"/>}/>
                <Route exact path={"/signin"} render={(props) => <AuthForm {...props} header="signin" buttonText="Sign In"/>}/>
                <Route exact path={"/:room"}  render={(props) => <ChatRoom {...props}/>}/> 
            </Switch>      
    );
}

export default Main;
