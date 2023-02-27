import {Component} from "react";
import Repository from '../repository/repository';

class RandomCocktail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cocktailData: undefined,
            loadError:''
        }
    }

    getRandom = async ()=>{
        const dataRepository = new Repository();
        try{
            const res = await dataRepository.getRandomCocktail();
            console.log(res);
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
export default RandomCocktail;
