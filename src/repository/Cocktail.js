export default class Cocktail{
    #id;
    #name;
    #category;
    #alc;

    constructor(serverObj) {
        this.#id = serverObj.drinks[0].idDrink;
        this.#name = serverObj.drinks[0].strDrink;
        this.#category = serverObj.drinks[0].strCategory;
        this.#alc = serverObj.drinks[0].strAlcoholic;
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
    get obj(){
        return {
            id: this.#id,
            name: this.#name,
            category: this.#category,
            alc: this.#alc
        }
    }
}
