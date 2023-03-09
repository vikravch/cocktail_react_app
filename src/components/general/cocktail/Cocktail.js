import React, {Component} from 'react';

// S - Single responsibility principle
// O
// L - Liskov substitution principle
// I
// D
// S.O.L.I.D.

class Cocktail extends Component {
    render() {
        return (
            <div>
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