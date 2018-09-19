import React, {Component} from "react";
import PropTypes from "prop-types";

class AuthForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        username: "",
        password: "",
        
      };
    }
  
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        console.log("submit has been press");
    };
  
    handleChange = event => {
      this.setState({[event.target.name]: event.target.value})
    };
    
    handleHomepageRedirect = () => {
        this.props.history.push("/");
    }
    render() {
        const {email, username, password} = this.state;
        const {header, buttonText, signUp} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <header>{header} <span onClick={this.handleHomepageRedirect}>X</span></header>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onchange={this.handleChange}
                    />
                    {signUp && (
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                onchange={this.handleChange}
                            />
                        </div>
                    )}
                    
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onchange={this.handleChange}
                    />
                    <button type="submit">
                        {buttonText}
                    </button>
                </form>
            </div>
        );
    }
}
AuthForm.propTypes = {
    buttonText: PropTypes.string,
    errors: PropTypes.object,
    heading: PropTypes.string
};  

export default AuthForm;
  