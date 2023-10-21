let btn1 = document.querySelector(".start");
// let btn2 = document.querySelector(".stop");

btn1.addEventListener("click", ()=>{
    // stopWatch();
    setInterval(watchTime,1000);
})
// btn2.addEventListener("click", ()=>{
    // clearInterva(stopWatch);
// })

let seconds = 0;
let minutes = 0;
let hours = 0;

let timers = document.getElementById('timer');

// function stopWatch(){
//     return setInterval(watchTime, 1000);
// }

function watchTime(){
    seconds++ ;
    if(seconds === 60){
        minutes=minutes+1;
        seconds = 0;
        if(minutes === 60){
            hours=hours+1;
            minutes = 0;
        }
    }

    timers.innerText =`${hours} hr : ${minutes} min : ${seconds} sec`;
}

function stop(){
    clearInterval(newme);

}
let newme = setInterval(watchTime, 1000);

// function newTime(){
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     timers.innerText = `${hours}0 hr : ${minutes}0 min : ${seconds}0 sec`;
// }

function stoping(){

}
