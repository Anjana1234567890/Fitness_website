
let timer = [];

function stopwatch(elementId){
    displayTimer = document.getElementById(elementId);
    const currentTime = displayTimer.textContent.split(":");
    let [second, minute, hour] = [Number(currentTime[2]), Number(currentTime[1]), Number(currentTime[0])]
    second++;
    if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
        }
    }

    let h = hour <10 ? "0" + hour :hour;
    let m = minute <10 ? "0" + minute :minute;
    let s = second <10 ? "0" + second :second;

    displayTimer.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(elementId){
    if(timer !== null){
        clearInterval(timer[elementId]);
    }
    timer[elementId] = setInterval(stopwatch,1000, elementId);
}
function watchStop(elementId){
    clearInterval(timer[elementId]);
}
function watchReset(elementId){
    clearInterval(timer[elementId]);
    document.getElementById(elementId).innerHTML = "00:00:00";
}

