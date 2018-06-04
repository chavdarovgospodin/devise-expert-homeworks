const todoModel = (id:number, title:string, email:string, completed:boolean=false):object=>{
    return {
        id, title, email, completed
    };
};

export default todoModel;