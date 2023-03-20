import React, {Component} from 'react';
import withContext from "../context/withContext";
import Route from "react-router-dom/es/Route";
import {Link} from "react-router-dom";

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
                        {/*<Route render={({history}) => (
                            <button onClick={()=>{history.push('/random')}}>Log in</button>
                        )}/>*/}
                        <Link to={'/random'}>
                            <h3>Log in</h3>
                        </Link>
                    </>
        );
    }
}

export default withContext(LoginPage);