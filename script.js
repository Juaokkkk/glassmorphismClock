const pointerH =  document.querySelector('.hour');
const pointerM = document.querySelector('.minute');
const pointerS = document.querySelector('.second');

const getTime = () =>{
    const date = new Date();

    return{
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

function update() {
    const { seconds,minutes,hours} = getTime();
    
    pointerS.style.transform = `translateY(-50%) rotate(${seconds*6}deg)`;
    pointerM.style.transform = `translateY(-50%) rotate(${minutes*6}deg)`;
    pointerH.style.transform = `translateY(-50%) rotate(${hours*30}deg)`;
}

update();
setInterval(update, 1000);