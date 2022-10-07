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

function drawClock(){
    drawFace(c,radius);
    drawNumbers(c,radius);
}


const RGB = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomRGB = `rgb(${red},${green},${blue})`;
    return randomRGB;
};

drawClock();



