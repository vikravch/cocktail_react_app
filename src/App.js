import './App.css';
import RandomCocktailPage from "./components/RandomCocktailPage";
import {Component} from "react";
import HistoryPage from "./components/HistoryPage";
import Navigation from "./components/Navigation";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: 'history'
        }
    }
    switchTab = (pagePath) => {
        console.log(pagePath);
        this.setState({...this.state, page: pagePath});
    }

    render(){
        return (
            <>
                <Navigation switchFun={this.switchTab}/>
                {
                    (this.state.page === 'random')?<RandomCocktailPage/>:
                        (this.state.page === 'history')?<HistoryPage/>:
                            <h1>Unknown path</h1>
                }
            </>
        );
    }
}

export default App;
