import React, {Component} from 'react';
import {AppContext} from "./contextCreator";

// Higher order component
class ContextManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            nameSaved: false,
        }
    }
    changeName = (event) =>{
        this.setState({...this.state, name: event.target.value});
    }
    loginHandler = ()=>{
        console.log(this.state.name);
        if(this.state.nameSaved){
            localStorage.setItem("userName", this.state.name);
        }
    }
    checkBoxChangeHandler = (event)=>{
        console.log(event.target.checked);
        this.setState({...this.state, nameSaved: event.target.checked});
    }
    render() {
        return (
            <AppContext.Provider
                value={{
                    name: this.state.name,
                    nameSaved: this.state.nameSaved,
                    changeName: this.changeName,
                    loginHandler: this.loginHandler,
                    checkBoxChangeHandler: this.checkBoxChangeHandler
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default ContextManager;