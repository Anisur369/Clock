let second=0;
let minute=0;
let hour=5;
let d=new Date();

setInterval(() => {
    d=new Date();
    second=d.getSeconds()*6;
    minute=d.getMinutes()*6;
    hour=d.getHours()*30;
    console.log(d.getHours())
    document.getElementById("second-hand").style.transform="rotate("+(second-90)+"deg)";
    document.getElementById("minute-hand").style.transform="rotate("+(minute-90)+"deg)";
    document.getElementById("hour-hand").style.transform="rotate("+(hour-90)+"deg)";
}, 1000);