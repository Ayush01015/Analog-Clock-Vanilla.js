let canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
let radius = canvas.height / 2;
c.translate(radius,radius);
radius = radius * 0.90;

const drawFace = () => {
    let grad;
    c.beginPath();
    c.arc(0,0,radius,0,2*Math.PI);
    c.fillStyle = 'white';
    c.fill();
    grad = c.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
    grad.addColorStop(0,'#333');
    grad.addColorStop(0.5,'white');
    grad.addColorStop(1,'#333');
    c.strokeStyle = grad;
    c.lineWidth = radius*0.05;
    c.stroke();
    c.beginPath();
    c.arc(0,0,radius*0.05,0,2*Math.PI);
    c.fillStyle = '#333';
    c.fill();

    
}

const drawNumbers = (c,radius) =>{
    let ang,num;
    c.font = radius * 0.15 + "px arial";
    c.textBaseline = 'middle';
    c.textAlign = "center";
    for(num=1;num<13;num++)
    {   ang = num * Math.PI / 6;
        c.rotate(ang);
        c.translate(0,-radius*0.85);
        c.rotate(-ang);
        c.fillText(num.toString(),0,0);
        c.rotate(ang);
        c.translate(0,radius*0.85);
        c.rotate(-ang);
    }

}

const drawTime = (c,radius) =>{
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(c,hour,radius*(0.5),radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+
    (second*Math.PI/(30*60));
    drawHand(c,minute,radius*0.8,radius*0.07);
    //second
    second=(second*Math.PI/30);
    drawHand(c,second,radius*0.9,radius*0.02);
}

const drawHand = (c,pos,length,width) =>{
    c.beginPath();
    c.lineWidth = width;
    c.lineCap = 'round';
    c.moveTo(0,0);
    c.rotate(pos);
    c.lineTo(0,-length);
    c.stroke();
    c.rotate(-pos);
}

const drawClock = () =>{
    drawFace(c,radius);
    drawNumbers(c,radius);
    drawTime(c,radius);
}


const RGB = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomRGB = `rgb(${red},${green},${blue})`;
    return randomRGB;
};

setInterval(drawClock,1000); //Async

//Ayush Shrivastav
// Contact : ayushshrivastav575@gmail.com 