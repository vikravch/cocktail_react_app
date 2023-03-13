import './App.css';
import RandomCocktailPage from "./components/pages/RandomCocktailPage";
import {Component} from "react";
import HistoryPage from "./components/pages/HistoryPage";
import Navigation from "./components/general/navigation/Navigation";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: 'login',
            name: '',
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
        this.switchTab('random');
    }

    render(){
        if(this.state.page === 'login'){
            return (
                <div>
                    <input onChange={this.changeName} type={"text"} placeholder={"Name"}/>
                    <button onClick={this.loginHandler}>Log in</button>
                </div>
            );
        } else {
            return(<>
                <Navigation
                    switchFun={this.switchTab}
                    current={this.state.page}
                    username={this.state.name}/>
                {
                    (this.state.page === 'random')?<RandomCocktailPage username={this.state.name}/>:
                        (this.state.page === 'history')?<HistoryPage/>:
                            <h1>Unknown path</h1>
                }
            </>);
        }
    }
}

export default App;
