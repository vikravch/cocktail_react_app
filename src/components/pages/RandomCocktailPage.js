import {Component} from "react";
import Repository from '../../repository/repository';
import Cocktail from "../general/cocktail/Cocktail";

class RandomCocktailPage extends Component {
    dataRepository = new Repository();

    constructor(props) {
        super(props);
        this.state = {
            cocktailData: undefined,
            loadError:''
        }
    }
    componentDidMount = () => {
        this.getRandom();
    }

    getRandom = async ()=>{
        try{
            const res = await this.dataRepository.getRandomCocktail();
            console.log(res);
            this.dataRepository.saveToHistory(res.obj);
            this.setState({...this.state, cocktailData: res});
        } catch (e) {
            this.setState({...this.state, cocktailData:undefined, loadError: 'Server error'});
        }
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.getRandom} >Get random</button>*/}
                {
                    this.state.cocktailData?
                        <Cocktail cocktail={this.state.cocktailData}/>:
                        <h4>{this.state.loadError}</h4>
                }
            </div>
        );
    }
}
export default RandomCocktailPage;
