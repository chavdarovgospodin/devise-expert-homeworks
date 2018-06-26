const fs = require('fs');
const path = require('path');
const {
    fork
} = require('child_process');
const children = [];

const readDir = (dir) => {
    let files = fs.readdirSync(dir);
    const child = fork('children/child.js', ['*',100 * Math.random()*10 + 500]);

    files.forEach((fileName) => {
        let file = path.join(dir, fileName);
        let stats = fs.statSync(file);

        child.on('message', (file) => {



            if (stats.isFile()) {
                //console.log(`${fileName}`);
                moveFiles();

            } else if (stats.isDirectory()) {
                console.log(`dir:${file}`);
                readDir(file);
            }
            process.stdout.write(`${file} done:${file.done}\n`)

            if (file.done === 100) {
                child.send('quit');
            }

        });
        children.push(child);


        function moveFiles() {
            let fname = path.basename(file);
            let dest = path.resolve('./test/', fname);

            fs.rename(file, dest, (err) => {
                if (err) {
                    throw err('No more files');
                }else console.log('File moved');
            })
        }

    });
};

readDir('./data');