import TodoListView from './todo-list';
import EmailListView from './email-list'
namespace app {
    
    export const init = ():void => {
        const $todos = document.getElementById('todos');
        const $input = document.getElementById('todo-input');
        const $addBtn = document.getElementById('add-todo');

        const $emailTodos = document.getElementById('todos');
        const $emailInput = document.getElementById('email-input');
        const $emailAddBtn = document.getElementById('add-email');

        const todoListView = TodoListView($todos, 'write 500 words', 'read docs');
        todoListView.render();

        const emailListView = EmailListView($todos, 'task1' , 'task2');
        emailListView.render();

        const validateInput = (value):boolean=>{
            return typeof value == 'string' && value.trim().length > 0;
        }

        $addBtn.addEventListener('click',()=>{
            if(validateInput($input['value'])){
            todoListView.action('add', $input['value']);
            $input['value'] = '';
        }
        });

        $input.addEventListener('keypress',(event)=>{
            if(event['keyCode'] === 13 && $input['value'] !==''){
                todoListView.action('add',$input['value']);
                $input['value'] = '';
            }
        });
        console.log('init app');
    }
}

app.init();