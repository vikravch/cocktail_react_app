import React, {Component} from 'react';
import {AppContext} from "../../context/contextCreator";
import withContext from "../../context/withContext";

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
                <h3>Cocktail for you {this.props.context.name}</h3>
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

export default withContext(Cocktail);