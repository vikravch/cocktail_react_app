import './App.css';
import RandomCocktailPage from "./components/pages/RandomCocktailPage";
import {Component} from "react";
import HistoryPage from "./components/pages/HistoryPage";
import Navigation from "./components/general/navigation/Navigation";

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
                <Navigation switchFun={this.switchTab} current={this.state.page}/>
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
