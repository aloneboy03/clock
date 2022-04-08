'use strict';

let nowHour = document.querySelector('.now--hour');
let nowPmAm = document.querySelector('.pm-am');
let nowWeek = document.querySelector('.day');
let nowDate = document.querySelector('.now--day');
let btnMode = document.querySelector('.btn--mode');
let hoursArrow = document.querySelector(".hours");
let minutesArrow = document.querySelector(".minutes");
let secondsArrow = document.querySelector(".seconds");
let nowDateName = document.querySelector('.date--name');


// let nowDay = new Date();



function clock(){
    let deg = 6;

setInterval(function(){
    const day = new Date();

    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg; 


    // console.log(hours / 30);
    // console.log(minutes / deg);
    // console.log(seconds / deg);

    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();
    let date = day.getDate();
    let month = day.getMonth();


    if(second < 10){
        nowHour.textContent = `${hour}:${minute}:0${second}`;
    }else
    if(minute < 10){
        nowHour.textContent = `${hour}:0${minute}:${second}`;
    }else
    if(hour < 10){
        nowHour.textContent = `0${hour}:${minute}:${second}`;
    }
    else{
        nowHour.textContent = `${hour}:${minute}:${second}`;
    }


    // document.querySelector('.now--day__number').textContent = date;

    if(date >= 10){
        document.querySelector('.now--day__number').textContent = date;
    }
    else{
        document.querySelector('.now--day__number').textContent = `0${date}`;
    }

    let dateName = day.getDay();
    switch(dateName){
        case 1: nowDateName.textContent = "Monday"; break;
        case 2: nowDateName.textContent = "Tuesday";break;
        case 3: nowDateName.textContent = "Wednesday";break;
        case 4: nowDateName.textContent = "Thursday";break;
        case 5: nowDateName.textContent = "Friday";break;
        case 6: nowDateName.textContent = "Saturday";break;
        case 7: nowDateName.textContent = "Sunday";break;
        default: console.log('bunday kun mavjud emas');break;
    }


    
    hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
    minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
    // secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
    if(seconds !== 0){
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
    }
    else{
        secondsArrow.style.transform = `rotateZ(360deg)`;
        secondsArrow.style.transition = '0.5s';
    }
    
    // if(hours !== 0){
    //     hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
    // }
    // else{
    //     hoursArrow.style.transform = `rotateZ(360deg)`;
    //     secondsArrow.style.transition = '0.5s';
    // }
}, 1000);
}

clock();

let bodyColor = document.querySelector('body');

document.querySelector('.btn--mode').addEventListener('click', function(e){
    if(bodyColor.style.backgroundColor !== 'white'){
        btnMode.textContent = 'Dark mode';
        bodyColor.style.backgroundColor = "white";
        bodyColor.style.transition = '0.5s';
        btnMode.style.backgroundColor = "#222";
        btnMode.style.color = "white";
        minutesArrow.style.backgroudColor = '#222';
        document.querySelector('.minutes').style.backgroundColor = '#222';
        document.querySelector('.seconds').style.backgroundColor = '#222';
        document.querySelector('.now--hour').style.color = "#222";
        document.querySelector('.now--day').style.color = '#222';
        document.querySelector('.now--day__number').style.backgroundColor = '#222';
        document.querySelector('.now--day__number').style.color = 'white';
    }
    else{
        btnMode.textContent = 'White mode';
        bodyColor.style.transition = '0.5s';
        bodyColor.style.backgroundColor = "#222";
        btnMode.style.backgroundColor = "white";
        btnMode.style.color = "#222";
        document.querySelector('.hours').style.backgroundColor = 'white';
        document.querySelector('.minutes').style.backgroundColor = 'white';
        document.querySelector('.now--hour').style.color = "white";
        document.querySelector('.now--day').style.color = 'white';
        document.querySelector('.now--day__number').style.backgroundColor = 'white';
        document.querySelector('.now--day__number').style.color = '#222';
    }
});

