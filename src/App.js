import './App.css';
import RandomCocktailPage from "./components/pages/RandomCocktailPage";
import React, {Component} from "react";
import HistoryPage from "./components/pages/HistoryPage";
import Navigation from "./components/general/navigation/Navigation";
import LoginPage from "./components/pages/LoginPage";
import withContext from "./components/context/withContext";
import CategoryPage from "./components/pages/CategoryPage";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import withRouter from "react-router-dom/es/withRouter";

class App extends Component{

    render(){
        return (
            <>
                {(this.props.location.pathname === '/') ? <></> : <Navigation/>}
                <Switch>
                    <Route path={'/'} exact component={LoginPage}/>
                    <Route path={'/random'} exact component={RandomCocktailPage}/>
                    <Route path={'/history'} exact component={HistoryPage}/>
                    <Route path={'/categories'} exact component={CategoryPage}/>
                    <Route component={LoginPage}/> {/*default*/}
                </Switch>
            </>
        )
    }
}

export default withRouter(withContext(App));
