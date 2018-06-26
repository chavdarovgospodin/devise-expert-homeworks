const {
    fork
} = require('child_process');
const children = [];
const status = [];
console.log(`Main PID:${process.pid}`);


const child = fork('children/child01.js', ['*', 100 * Math.random() * 10 + 500]);

child.on('message', (data) => {
    //process.stdout.write(`child: ${data.pid} done:${data.done}\n`);
    let found = status.find((el) => el.pid === data.pid);
    if (!found) {
        status.push(data);
    }
    status.find((childStatus) => {
        if (childStatus.pid === data.pid) {
            childStatus.done = data.done;
        }
    });

    if (data.done === 100) {
        child.send('quit');
    }
    showOutput();
});
children.push(child);


const showOutput = () => {

    let output = '';
    status.forEach((el, index, arr) => {
        if (el.done === 100) {
            arr.splice(0, 1, el);
        } else {
            output += ` Child ${el.pid} ${el.done}`;
        }
    });
    process.stdout.clearScreenDown();
    process.stdout.cursorTo(0);
    process.stdout.write(output);
    output = '';
};