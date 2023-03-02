import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <h5 onClick={
                    ()=>{
                        this.props.switchFun('random');
                    }}>Random</h5>
                <h5 onClick={
                    ()=>{
                        this.props.switchFun('history');
                    }}>History</h5>
            </div>
        );
    }
}

export default Navigation;
