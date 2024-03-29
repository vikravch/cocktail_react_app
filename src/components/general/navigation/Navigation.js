import React, {Component} from 'react';
import './Navigation.css';
import withContext from "../../context/withContext";
import {Link} from "react-router-dom";
import withRouter from "react-router-dom/es/withRouter";

class Navigation extends Component {
    render() {
        console.log(this.props.location);
        return (
            <>
                <div className={"nav"}>
                    <Link className={"link"} to={'/random'}>
                        <span className={(this.props.location.pathname === '/random') ? "active" : ""}>Random</span>
                    </Link>
                    <Link className={"link"}  to={'/history'}>
                        <span className={(this.props.location.pathname === '/history') ? "active" : ""} >History</span>
                    </Link>
                    <Link className={"link"}  to={'/categories'}>
                        <span className={(this.props.location.pathname === '/categories') ? "active" : ""}>Categories</span>
                    </Link>
                    <span className={"username"}>
                                        {this.props.context.name}
                                </span>
                    <Link className={"link"} to={'/'}>
                        <span className={"logout"}>Log out</span>
                    </Link>
                </div>
            </>
        );
    }
}

export default withRouter(withContext(Navigation));
