import React, {Component} from 'react';
import './Navigation.css';
import withContext from "../../context/withContext";

class Navigation extends Component {
    render() {
        return (
            <>
                <div className={"nav"}>
                    <span className={(this.props.context.page === 'random') ? "active" : ""} onClick={
                        () => {
                            this.props.context.switchPage('random');
                                    }}>Random</span>

                    <span className={(this.props.context.page === 'history') ? "active" : ""} onClick={
                        () => {
                            this.props.context.switchPage('history');
                        }}>History</span>

                    <span className={(this.props.context.page === 'categories') ? "active" : ""} onClick={
                        () => {
                            this.props.context.switchPage('categories');
                        }}>Categories</span>

                    <span className={"username"}>
                                        {this.props.context.name}
                                </span>
                    <span className={"logout"}>Log out</span>
                </div>
            </>
        );
    }
}

export default withContext(Navigation);
