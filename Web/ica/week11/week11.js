console.log("Making sure this is linekd correctly");

const x = 1;
const y = 2;

if(y === x){
    console.log("Success");
}
else{
    console.log("fail");
}

const btn = document.querySelector("button");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number){
    return Math.floor(Math.random() * number);
}

function draw(){
    //console.log("Test");
    ctx.clearRect(0,0, canvas.width, canvas.height);

    for(let i = 0; i < 50; i++){
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50), 0, 2 * Math.PI,
        );

        ctx.fill();
    }

    for (let i = 0; i<100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(245, 40, 145, 0.8)";
        ctx.rect (
        random(canvas.width),
        random(canvas.height),
        random(50),
        random(50),
        0,
        2 * Math.PI,
        );
     ctx.fill();
    }

    for(let i = 0; i < 110; i++){
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let color = "rgba("+red+","+green+","+blue+"0.5)";
        ctx.fillStyle = color;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(120), 0, 2 * Math.PI,
        );

        ctx.fill();
    }
}


btn.addEventListener("click", draw);
//look for, do