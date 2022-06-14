const prompt = require('prompt-sync')({sigint: true})

let answer = Math.ceil(Math.random() * 100);
console.log(answer)
let guess = Number(prompt("Enter a number between 1 and 100 "))
let count = 0



while (count < 2 && guess !== answer){
    count++;
    if(guess < answer){
        console.log("Too low. Go higher")
        guess = Number(prompt("  "))
    }
    else if(guess > answer){
        console.log("Too high. Go lower.")
        guess = Number(prompt("  "))

    }
 
}

if(count === 2){
    console.log("Out of guesses, loser. The answer was..." + answer)
}

if(guess === answer){
    console.log(" You got it!!!!! The answer is..." + answer)
}

