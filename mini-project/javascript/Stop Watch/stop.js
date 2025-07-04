let display = document.getElementById("display");
let timer = null;
let elapsed = 0;
let startTime = 0;
let run = false;

function start(){
    if(!run){
        startTime = Date.now() - elapsed;
        timer = setInterval(uptade, 10);
        run = true;
    }
}

function stop(){
    if(run){
        clearInterval(timer);
        elapsed = Date.now() - startTime;
        run = false;
    }
}

function restart(){
    clearInterval(timer);
    elapsed = 0;
    startTime = 0;
    run = false;
    display.textContent = "00:00:00:00";
}

function uptade(){
    let current = Date.now();
    elapsed = current - startTime;

    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let minuts = Math.floor(elapsed / (1000 * 60) % 60);
    let sec = Math.floor((elapsed / 1000 % 60));
    let milli = Math.floor(elapsed % 1000 /10);

    hours = String(hours).padStart(2, "0");
    minuts = String(minuts).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    milli = String(milli).padStart(2, "0");

    let NewOne = `${hours}:${minuts}:${sec}:${milli}`;

    display.textContent = NewOne;

}