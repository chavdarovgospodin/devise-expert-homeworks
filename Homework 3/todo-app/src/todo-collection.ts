import todoModel from './todo-mode';

const todoCollection = (...titleArr:string[])=>{
    let collection:object[] = titleArr.map( (title,index)=>{
        return todoModel (index + 1, title)
    });

    const get = ():object[]=>{
        return collection;
    };

    const add = (title:string):void=>{
        const id = collection.length +1;
        collection = [...collection, todoModel(id,title)];
    }

    const remove =(id:number):void=>{
        collection = collection.filter((todo)=>{
            return todo['id'] !== id;
        });
    }
    const getItemById = (id:number)=>{
        let item;
         collection.forEach((todo)=>{
             if(todo['id'] === id) {
                 item = todo;
             }
        });
        return item;
    };

    const toggleCompleted = (id:number):void=>{
        collection = collection.map((todo)=>{
            if(todo['id'] == id) {
                return {
                    ...todo,
                    completed: !todo['completed']
                };
            }
            return todo;
        });
    }

    return {
        get,
        add,
        remove,
        getItemById,
        toggleCompleted
    };
};

export default todoCollection;