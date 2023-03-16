import React, {Component} from 'react';
import {AppContext} from "../../context/contextCreator";

// S - Single responsibility principle
// O - Open-closed principle
// L - Liskov substitution principle
// I - Interface segregation principle
// D - Dependency inversion principle
// S.O.L.I.D.

class Cocktail extends Component {
    render() {
        return (
            <div>
                <AppContext.Consumer>
                    {
                        value =>
                            <h3>Cocktail for you {value.name}</h3>
                    }
                </AppContext.Consumer>
                <h2>{this.props.cocktail.name}</h2>
                <div>{`Category: ${this.props.cocktail.category}`}</div>
                <div>{`Contains Alcohol: ${this.props.cocktail.alc}`}</div>
                <img src={this.props.cocktail.thumb}/>
                <div>{this.props.cocktail.ingredients.map((ingredient)=>{
                    return <div>
                        <span>{`${ingredient.name}: `}</span>
                        <span>{ingredient.measure}</span>
                    </div>
                })}</div>
            </div>
        );
    }
}

export default Cocktail;