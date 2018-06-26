process.on('SIGINT', () => {
    process.stdout.write('press again ctr + c for exit' + '\n');
    setTimeout(() => {
        console.log('in' + '\n');
        process.on('SIGINT', () => {
            console.log('exit' + '\n');

            process.exit(1);
        })

    }, 2000);

    setTimeout(() => {
        process.kill(process.pid, 'SIGHUP');    
    }, 2000);
});

process.on('SIGHUP', () => {
    process.stdout.write('config reloaded' + '\n');
});


setInterval(() => {
    console.log('Running...');
}, 2000);