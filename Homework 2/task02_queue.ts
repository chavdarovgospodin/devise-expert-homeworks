import {Container} from './interface';

export class Queue<T> implements Container<T>{
    private array:T[];

    constructor(){
        this.array = [];
    }

    put( el:T):void{
        this.array.push(el);
    }

    get():T | undefined{
        let firstElement = this.array.shift();
        return firstElement;
    }

    remove(el:T){
        return this.array.reduce(function(T){ return T }); 
    }

}