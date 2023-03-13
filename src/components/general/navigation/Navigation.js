import React, {Component} from 'react';
import './Navigation.css';
import {AppContext} from "../../context/contextCreator";
class Navigation extends Component {
    render() {
        return (
                    <AppContext.Consumer>
                        {value => (
                            <div className={"nav"}>
                                <span className={(value.page==='random')?"active":""} onClick={
                                    ()=>{
                                        value.switchPage('random');
                                    }}>Random</span>
                                <span className={(value.page==='history')?"active":""} onClick={
                                    ()=>{
                                        value.switchPage('history');
                                    }}>History</span>
                                <span className={"username"}>
                                        {value.name}
                                </span>
                                <span className={"logout"}>Log out</span>
                            </div>
                        )

                        }
                    </AppContext.Consumer>


        );
    }
}

export default Navigation;
