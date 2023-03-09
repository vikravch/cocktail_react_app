import React, {Component} from 'react';
import Repository from "../../repository/repository";

class HistoryPage extends Component {
    dataRepository = new Repository();

    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    componentDidMount() {
        this.getHistory();
    }

    getHistory = ()=>{
        const arr = this.dataRepository.getHistoryList();
        this.setState({...this.state, history:arr});
    }
    render() {
        return (
            <div>
                {/*<button onClick={this.getHistory}>Get history</button>*/}
                <span>
                    {JSON.stringify(this.state.history)}
                </span>
            </div>
        );
    }
}

export default HistoryPage;
