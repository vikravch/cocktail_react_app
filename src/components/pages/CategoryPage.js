import React, {Component} from 'react';
import Repository from '../../repository/repository';

class CategoryPage extends Component {
    dataRepository = new Repository();

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }


    getCategories = async ()=>{
        try{
            const res = await this.dataRepository.getCategories();
            console.log(res);
            this.setState({...this.state, categories: res});
        } catch (e) {
        }
    }

    async componentDidMount() {
        this.getCategories();
    }

    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.state.categories)}</h1>
            </div>
        );
    }
}

export default CategoryPage;