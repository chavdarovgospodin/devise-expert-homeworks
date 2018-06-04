import EmailCollection from './email-collection';
import EmailView from './email-view';

const EmailListView = ($el, ...titleArr:string[])=> {
    let emailCollection = EmailCollection(...titleArr);
    const render = ():void =>{
        const $list = emailCollection.get().map((email)=>{
            return EmailView(email).render();
        }).join('');
        $el.innerHTML = `<ul>${$list}</ul>`;
        attachEvents();
    }

    const attachEvents = ():void=>{
        const $todos = $el.querySelectorAll('.list-group-item');

        $todos.forEach(($email)=>{
            const id = parseInt($email.getAttribute('data-id'));
            const $checkbox = $email.querySelector('.toggleCompleted');
            const $removeBtn = $email.querySelector('.remove');

            $checkbox.addEventListener('click', ()=>{
               action('toggleCompleted', id);
            });

            $removeBtn.addEventListener('click', ()=>{
                action('remove',id);
            })
        });
    };

    const action = (type:string, ...params:any[]):void=>{
        emailCollection[type](...params);
        render();
    }

    return {
        render,
        action
    };
};

export default EmailListView;