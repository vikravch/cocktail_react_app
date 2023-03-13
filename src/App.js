import './App.css';
import RandomCocktailPage from "./components/pages/RandomCocktailPage";
import React, {Component} from "react";
import HistoryPage from "./components/pages/HistoryPage";
import Navigation from "./components/general/navigation/Navigation";
import LoginPage from "./components/pages/LoginPage";
import {AppContext} from "./components/context/contextCreator";

class App extends Component{
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

    render(){
        if(this.state.page === 'login'){
            return (
                <LoginPage
                    changeName={this.changeName}
                    checkBoxChangeHandler={this.checkBoxChangeHandler}
                    loginHandler={this.loginHandler}
                />
            );
        } else {
            return(<AppContext.Provider
                value={{
                    page: this.state.page,
                    name: this.state.name,
                    nameSaved: this.state.nameSaved,
                    switchPage: this.switchTab
                }}
            >
                <Navigation/>
                {
                    (this.state.page === 'random')?
                        <RandomCocktailPage/>:
                        (this.state.page === 'history')?<HistoryPage/>:
                            <h1>Unknown path</h1>
                }
            </AppContext.Provider>);
        }
    }
}

export default App;
