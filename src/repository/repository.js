// Domain - repository, rules of getting and data management
import Cocktail from "./Cocktail";
import {Api, FakeApi} from "../data/api";
import * as LocalStore from "../data/local_store";
/*
interface Repository{
    async getRandomCocktail();
    saveToHistory(cocktail);
    getHistoryList();
}
*/


export default class DataRepository{
    async getRandomCocktail(){
        // fetch ...
        const responseData = await Api.getRandom();
        console.log(responseData);
        return new Cocktail(responseData);
    }
    saveToHistory(cocktail){
        LocalStore.saveCocktailToStore(cocktail);
    }
    getHistoryList(){
        return LocalStore.getHistoryFromStore();
    }
}

class FakeRepository{
    async getRandomCocktail(){
        const responseData = await FakeApi.getRandom(); // server object
        return new Cocktail(responseData);
    }
    saveToHistory(cocktail){
        console.log('Try to save');
    }
    getHistoryList(){
        return [{
            id: 123,
            name: 'Test',
            category: 'Test category',
            alc: false
        }];
    }
}
