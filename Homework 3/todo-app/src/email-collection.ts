import emailModel from './email-model';

const emailCollection = (...titleArr:string[])=>{
    let collection:object[] = titleArr.map( (title,index)=>{
        return emailModel (index + 1, title);
    });

    const get = ():object[]=>{
        return collection;
    };

    const add = (title:string):void=>{
        const id = collection.length +1;
        collection = [...collection, emailModel(id,title)];
    }

    const remove =(id:number):void=>{
        collection = collection.filter((email)=>{
            return email['id'] !== id;
        });
    }

    const toggleCompleted = (id:number):void=>{
        collection = collection.map((email)=>{
            if(email['id'] == id) {
                return {
                    ...email,
                    completed: !email['completed']
                };
            }
            return email;
        });
    }

    return {
        get,
        add,
        remove,
        toggleCompleted
    };

};

export default emailCollection;