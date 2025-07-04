function uptadeTime()
{
    let time = document.getElementById("clock");
    let now = new Date();
    let hour = now.getHours().toString().padEnd(2, 0);
    hour = hour % 12 || 12;
    let minute = now.getMinutes().toString().padEnd(2, 0);
    let second = now.getSeconds().toString().padEnd(2, 0);
    let newTime = `${hour}:${minute}:${second}`;
    time.textContent = newTime;
}
uptadeTime();
setInterval(uptadeTime,1000);