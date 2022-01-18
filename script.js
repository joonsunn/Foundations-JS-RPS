console.log("Hello World");

let rps = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let randomNum = Math.floor(Math.random() * rps.length);
    console.log(rps[randomNum]);
}

computerPlay();