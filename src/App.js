import './App.css';
import RandomCocktailPage from "./components/pages/RandomCocktailPage";
import React, {Component} from "react";
import HistoryPage from "./components/pages/HistoryPage";
import Navigation from "./components/general/navigation/Navigation";
import LoginPage from "./components/pages/LoginPage";
import withContext from "./components/context/withContext";
import CategoryPage from "./components/pages/CategoryPage";

class App extends Component{

    render(){
        let selectedPage;
        switch (this.props.context.page){
            case 'random':
                selectedPage = <RandomCocktailPage/>;
                break;
            case 'history':
                selectedPage = <HistoryPage/>;
                break;
            case 'categories':
                selectedPage = <CategoryPage/>;
                break;
            default:
                selectedPage = <h1>Unknown path</h1>;
        }

        if(this.props.context.page === 'login'){
            return <LoginPage/>;
        } else {
            return(
                <>
                    <Navigation/>
                    { selectedPage }
                </>
            );
        }
    }
}

export default withContext(App);
