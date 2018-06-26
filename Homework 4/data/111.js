let progress = process.argv[2],
    time     = process.argv[3],
    sym      = progress;


let interval = setInterval(()=>{
   
    progress += sym;
    process.send({
        pid: process.pid,
        done: Math.ceil(progress.length*100)
    });
    if(progress.length >= 20){
        clearInterval(interval);
    }
}, time);