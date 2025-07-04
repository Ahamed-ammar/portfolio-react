function Uptade(){
    let current = new Date;
    let Hours = current.getHours();
    let minute = current.getMinutes();
    let sec = current.getSeconds();
    Hours = Hours.toString().padStart(2, "0");
    minute = minute.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");
    let time = `${Hours}:${minute}:${sec}`;
    document.getElementById("display").textContent = time;
}
setInterval(Uptade,1000);
