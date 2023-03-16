import React, {Component} from 'react';
import {AppContext} from "./contextCreator";

class ContextManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'login',
            name: '',
            nameSaved: false,
        }
    }
    switchTab = (pagePath) => {
        console.log(pagePath);
        this.setState({...this.state, page: pagePath});
    }
    changeName = (event) =>{
        this.setState({...this.state, name: event.target.value});
    }
    loginHandler = ()=>{
        console.log(this.state.name);
        if(this.state.nameSaved){
            localStorage.setItem("userName", this.state.name);
        }
        this.switchTab('random');
    }
    checkBoxChangeHandler = (event)=>{
        console.log(event.target.checked);
        this.setState({...this.state, nameSaved: event.target.checked});
    }
    render() {
        return (
            <AppContext.Provider
                value={{
                    page: this.state.page,
                    name: this.state.name,
                    nameSaved: this.state.nameSaved,
                    switchPage: this.switchTab
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default ContextManager;