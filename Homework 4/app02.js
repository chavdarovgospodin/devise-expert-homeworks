const fs = require('fs');
const path = require('path');
const {
    fork
} = require('child_process');
const children = [];
const status = [];
console.log(`Main PID:${process.pid}`);

const readDir = (dir) => {
    let files = fs.readdirSync(dir);
    

    files.forEach((fileName) => {
        const child = fork('children/child.js', ['*',100 * Math.random()*10 + 500]);
        let file = path.join(dir, fileName);
        let stats = fs.statSync(file);

        child.on('message', (data) => {
            let found = status.find((el)=>el.pid === data.pid);
            if(!found){
                status.push(data);
            }
            status.find((childStatus)=>{
                if(childStatus.pid === data.pid){
                    childStatus.done = data.done;
                }
            });

            if (stats.isFile()) {
                //console.log(`${fileName}`);
                moveFiles();

            } else if (stats.isDirectory()) {
                console.log(`dir:${file}`);
                readDir(file);
            }
            if(data.done === 100 ){
                child.send('quit');
            }
            showOutput();

        });
        children.push(child);


        const moveFiles = ()=>{
            let fname = path.basename(file);
            let dest = path.resolve('./test/', fname);

            fs.rename(file, dest, (err) => {
                if (err) {
                    throw err('No more files');
                }else console.log(`${fname} moved.`);
            })
        }
        const showOutput = ()=>{

            let output = '';
            status.forEach((el,index,arr)=>{
                if( el.done === 100 ){
                    arr.splice(0,1,el);
                }
                else{
                    output += ` Child ${el.pid} ${el.done}\n`;
                }
            });
            process.stdout.clearScreenDown();
            process.stdout.cursorTo(0);
            process.stdout.write(output);
            output = '';
        };

    });
};

readDir('./data');