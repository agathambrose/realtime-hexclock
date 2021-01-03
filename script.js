
// Start Clock Responsiveness
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function getClockRunning(){
    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("The time is: " + "Hour- " + hr + " Mins- " + min + " Secs- " + sec);

    let hrPosition = hr*360/12 + (min*(360/60)/12);
    let minPosition = min*360/60 + (sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.style.transform = `rotate(${hrPosition}deg)`
    MINUTEHAND.style.transform = `rotate(${minPosition}deg)`
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`
}

var interval = setInterval(getClockRunning, 1000); //1000 milliseconds equates to 1 second

// End Clock Responsiveness

// Start Hex Responsiveness
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex(){
    let hexCol = '#'

    for (let i=0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random];
    }
    
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;

}

// End Hex Responsiveness