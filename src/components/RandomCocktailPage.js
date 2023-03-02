import {Component} from "react";
import Repository from '../repository/repository';

class RandomCocktailPage extends Component {
    dataRepository = new Repository();

    constructor(props) {
        super(props);
        this.state = {
            cocktailData: undefined,
            loadError:''
        }
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
                <button onClick={this.getRandom} >Get random</button>
                {
                    this.state.cocktailData?
                        <span>{this.state.cocktailData.name}</span>:
                        <h4>{this.state.loadError}</h4>
                }
            </div>
        );
    }
}
export default RandomCocktailPage;
