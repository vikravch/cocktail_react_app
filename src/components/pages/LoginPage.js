import React, {Component} from 'react';
import withContext from "../context/withContext";

class LoginPage extends Component {
    render() {
        return (
                    <>
                        <div>
                            <input onChange={this.props.context.changeName}
                                   type={"text"} placeholder={"Name"}/>
                        </div>
                        <div>
                            <input type={"checkbox"} onChange={this.props.context.checkBoxChangeHandler}/>
                            Save my name
                        </div>
                        <button onClick={this.props.context.loginHandler}>Log in</button>
                    </>
        );
    }
}

export default withContext(LoginPage);