import React, {Component} from "react";

export default class ChatTextBox extends Component {
    constructor(props){
        super(props)
        this.state = {message: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.message);
    }
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
            
            <input type="submit" value="send" />
            </form> 
        </div>
        )
    }
}