import Ingredient from "./Ingredient";

export default class Cocktail{
    #id;
    #name;
    #category;
    #alc;
    #thumb;
    #ingredients; // Array!

    constructor(serverObj) {
        this.#id = serverObj.drinks[0].idDrink;
        this.#name = serverObj.drinks[0].strDrink;
        this.#category = serverObj.drinks[0].strCategory;
        this.#alc = serverObj.drinks[0].strAlcoholic;
        this.#thumb = serverObj.drinks[0].strDrinkThumb;

        this.#ingredients = [];
        for (let i = 1; i<=15; i++){
            const cocktailData = serverObj.drinks[0];
            if(cocktailData['strIngredient'+i]!=null){
                this.#ingredients.push(new Ingredient(
                    cocktailData['strIngredient'+i],
                    cocktailData['strMeasure'+i]
                ))
            }
        }
        // strIngredient2: "Ice"
        // strIngredient(1-15): "Name" / null

        // strMeasure2 : "Juice of 1/2 "
        // strMeasure(1-15): "Measure" / null
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }
    get category(){
        return this.#category;
    }
    get alc(){
        return this.#alc;
    }
    get thumb(){
        return this.#thumb+'/preview';
    }
    get image(){
        return this.#thumb;
    }
    get ingredients(){
        return this.#ingredients;
    }
    get obj(){
        return {
            id: this.#id,
            name: this.#name,
            category: this.#category,
            alc: this.#alc,
            thumb: this.#thumb,
        }
    }
}
