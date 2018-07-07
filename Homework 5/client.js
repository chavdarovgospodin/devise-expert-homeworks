const {
    Socket
} = require('net');
const {
    createInterface
} = require('readline')

const fs = require('fs');
const path = require('path');

const client = Socket();
client.setEncoding('utf8');

const readLine = createInterface(process.stdin, process.stdout);

readLine.question('User Name:', (username) => {
    console.log('***For all available commands press help***');
    client.connect(3000, '127.0.0.1', () => {

        client.write(username);
        readLine.setPrompt('@');
        readLine.prompt();


        readLine.on('line', (line) => {

            if (line === 'quit') {
                client.end();
                readLine.close();
                return;
            }
            if (line === 'help') {
                process.stdout.write(`list: Lists all files and folders\ndelete: Deletes file\nopen: Opens a file\nquit: exits the program\n`);
                readLine.prompt();
                client.write(line);
                return;
            }
            if (line === 'list') {
                readDir('./1/');
                readLine.prompt();
                client.write(line);
                return;
            }
            if (line === 'delete') {
                readLine.question('type the file to delete: ', (answer) => {
                    deleteFile(answer);
                    readLine.prompt();
                    client.write(answer);
                    return;
                });
            }
            if (line === 'open') {
                readLine.question('type the file to be opened: ', (answer) => {
                    openFile(answer);
                    readLine.prompt();
                    client.write(answer);
                    return;
                });
            }
            client.write(line);
            readLine.prompt();
        })
    });
});

client.on('close', () => {
    process.stdout.write('\nConnection closed');
});

const readDir = (dir) => {
    let files = fs.readdirSync(dir);

    files.forEach((fileName) => {
        let file = path.join(dir, fileName);
        let stats = fs.statSync(file);

        if (stats.isFile()) {
            console.log(`${fileName}`);
        } else if (stats.isDirectory()) {
            console.log(`dir:${file}`);
            readDir(file);
        }
    });
};

const deleteFile = (file) => {

    let dir = './1/';
    let files = fs.readdirSync(dir);

    files.forEach((fileName) => {
        let fileToDelete = path.join(fileName);
        if (file == fileToDelete) {
            fileToDelete = path.join(dir, fileName);
            fs.unlink(fileToDelete, function (err) {
                if (err) throw err;
                console.log(`${file} deleted`);
            });
        }
    });

};


const openFile = (file) => {

    let dir = './1/';
    let files = fs.readdirSync(dir);

    files.forEach((filename) => {
        let fileToOpen = path.join(filename);
        if (file == fileToOpen) {
            fileToOpen = path.join(dir, filename);
            let content = fs.readFileSync(fileToOpen, 'utf8')
            return console.log(content);
        }
    });
};