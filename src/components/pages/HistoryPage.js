import React, {Component} from 'react';
import Repository from "../../repository/repository";
import '../general/styles.css'
import './HistoryPage.css'

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
                <div>
                    {this.state.history.map((historyItem)=>{
                        return <div className={'item'}>
                            <span>{historyItem.name}</span>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default HistoryPage;
