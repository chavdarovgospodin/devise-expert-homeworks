import {Queue} from './task02_queue';

import {Container} from './interface';

let queue = new Queue<string>();

queue.put('Petur');
queue.put('Georgi');
queue.put('Georgi');
queue.put('Mihail');
queue.put('Chavdar');
queue.get();
queue.remove('Georgi');

console.log(queue);