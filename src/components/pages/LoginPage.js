import React, {Component} from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <input onChange={this.props.changeName} type={"text"} placeholder={"Name"}/>
                </div>
                <div>
                    <input type={"checkbox"} onChange={this.props.checkBoxChangeHandler}/> Save my name
                </div>

                <button onClick={this.props.loginHandler}>Log in</button>
            </div>
        );
    }
}

export default LoginPage;