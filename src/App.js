import './App.css';
import RandomCocktailPage from "./components/pages/RandomCocktailPage";
import React, {Component} from "react";
import HistoryPage from "./components/pages/HistoryPage";
import Navigation from "./components/general/navigation/Navigation";
import LoginPage from "./components/pages/LoginPage";
import ContextManager from "./components/context/ContextManager";

class App extends Component{

    render(){
        if(this.state.page === 'login'){
            return (
                <ContextManager>
                    <LoginPage
                        changeName={this.changeName}
                        checkBoxChangeHandler={this.checkBoxChangeHandler}
                        loginHandler={this.loginHandler}
                    />
                </ContextManager>
            );
        } else {
            return(
                <ContextManager>
                    <Navigation/>
                    {
                        (this.state.page === 'random')?
                            <RandomCocktailPage/>:
                            (this.state.page === 'history')?<HistoryPage/>:
                                <h1>Unknown path</h1>
                    }
                </ContextManager>);
        }
    }
}

export default App;
