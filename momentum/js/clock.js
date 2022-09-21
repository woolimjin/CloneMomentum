const clock = document.querySelector("h2#clock");
const clock2 = document.querySelector("h3#clock2");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
clock.innerText= (`${hours}:${minutes}:${second}`);
clock2.innerText=date.toLocaleTimeString();
}
getClock(); // * 새로고침 했을 때 바로 시간 불러옴
setInterval(getClock, 1000); //* 1초(1000ms)마다 반복