import React, {Component} from 'react';
import Repository from '../../repository/repository';
import '../general/styles.css';
import './CategoryPage.css';
import {Link} from "react-router-dom";

class CategoryPage extends Component {
    dataRepository = new Repository();

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            cocktails: []
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
    getCocktailsByCategory = async (category) => {
        try{
            const res = await this.dataRepository.getCocktailsByCategory(category);
            console.log(res);
            this.setState({...this.state, cocktails: res});
        } catch (e){}
    }

    async componentDidMount() {
        this.getCategories();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.category !== prevProps.match.params.category){
            console.log(this.props.match.params.category);
            this.getCocktailsByCategory(this.props.match.params.category);
        }
    }

    render() {
        return (
            <div className={'categories_main_container'}>

                <div>
                {
                    this.state.categories.map((category)=>
                        <Link to={'/categories/' + category.categoryName}
                              className={'item'}>{
                                    category.categoryName
                        }</Link>
                    )
                }
                </div>

                <div className={'categories_cocktail_list'}>
                    {
                        this.state.cocktails.map((cocktail)=>
                            <div className={'item'}>
                                {cocktail.name}
                            </div>
                        )
                    }
                </div>

            </div>
        );
    }
}

export default CategoryPage;