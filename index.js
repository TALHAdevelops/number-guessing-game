#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5);
const answer = await inquirer.prompt([
    {
        name: "guess",
        type: "number",
        message: "Please Guess a number from 0 to 5",
    }
]);
console.log(answer);
if (answer.guess === randomNumber) {
    console.log("You won");
}
else {
    console.log("You lost");
}
console.log(`The number is : ${randomNumber}`);
