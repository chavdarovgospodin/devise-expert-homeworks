import {expect} from 'chai';
import TodoModel from '../src/todo-mode';
import TodoCollection from '../src/todo-collection';
// describe('simple test', () => {
//     it ('should equal to 12', () => {
//         let price = 12;

//         expect(price).to.equal(12);
//     });

//     let product = {name:'Iphone'};
//     it('should be an object', () =>{
//         expect(product).to.be.an('object');
//     });

//     it('should have property of type string', () => {
//         expect(product).to.have.property('name');
//         expect(product['name']).to.be.a('string');
//     })
// });

describe('TodoModel Object', ()=> {
    const newTodo = TodoModel(1, 'read docs', false);
    it('should return todo item with ,id ,title, completed', ()=>{
        expect(newTodo).to.have.property('id');
        expect(newTodo).to.have.property('title');
        expect(newTodo).to.have.property('completed');
    });
    it('should return object {1, "read docs", false}',()=>{
        expect(newTodo).to.eql({
            id:1,
            title: 'read docs',
            completed: false
        })
    });
});

describe ('Todo Collection', ()=>{
    const newTodoCollection = TodoCollection('read', 'write', 'learn');
    it('should be an object', ()=>{
        expect(newTodoCollection).to.be.an('object');
    });
    it('should return an array of objects', ()=>{
        expect(newTodoCollection.get()).to.be.an('array');
    });
    it('should return an array of 3 items', ()=>{
        expect(newTodoCollection.get().length).to.be.equal(3);
    });
    it('should return item with id 2',()=>{
        const item2 = newTodoCollection.getItemById(2);
        expect(item2).to.eql({
            id:2,
            title:'write',
            completed:false
        });
    });
    it('should add new todo', ()=>{
        const oldItems = newTodoCollection.get();
        newTodoCollection.add('create app');

        expect(newTodoCollection.get().length).to.equal(oldItems.length + 1);
    });
    it('should remove todo', ()=>{
        const oldItems = newTodoCollection.get();
        newTodoCollection.remove(2);
        expect(newTodoCollection.get().length).to.equal(oldItems.length -1);
    });
    it('should toggle completed', ()=>{
        newTodoCollection.toggleCompleted(1);
        expect(newTodoCollection.getItemById(1)).to.eql({
            id:1,
            title:'read',
            completed:true
        })
    })
});