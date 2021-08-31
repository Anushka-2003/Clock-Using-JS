//const hands = document.querySelectorAll(".hand");
const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document.querySelector(".sec-hand");

// for (let i = 1; i <= 60; i++) {
//     for(let j = 1; j <= 60; j++ ){
//         for(let k = 1; k <= 60; k++){
            
//         }
//     }
// }

function setDate(){
    //console.log("hi");
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90; // we added 90 deg because hands were initially set to 90deg
    sec.style.transform = `rotate(${secondDegrees}deg)`

    const minutes = now.getMinutes();
    const minDeg = ((minutes/60) * 360)+90;
    min.style.transform = `rotate(${minDeg}deg)`

    const hourHand = now.getHours();
    const hourDeg = ((hourHand / 60) * 360) + 90;
    hour.style.transform = `rotate(${hourDeg}deg)`
    
}

setInterval(setDate, 1000);