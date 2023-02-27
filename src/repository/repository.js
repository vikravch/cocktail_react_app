// Domain - repository, rules of getting and data management
import Cocktail from "./Cocktail";
import {Api, FakeApi} from "../data/api";

export default class DataRepository{
    async getRandomCocktail(){
        // fetch ...
        const responseData = await Api.getRandom();
        console.log(responseData);
        return new Cocktail(responseData);
    }
}

class FakeRepository{
    async getRandomCocktail(){
        const responseData = await FakeApi.getRandom(); // server object
        return new Cocktail(responseData);
    }
}
