#! /usr/bin/env node

import inquirer from "inquirer";
// printing a welcome message
console.log("\n\tWelcome To \`CodewitAsad\` - CLI Simple Calculater\n");

//  Asking questioms from ysers through Inquirer

let answer = await  inquirer.prompt([
    {message: "Enter First Number", type: "number" , name: "firstNumber"},
    {message: "Enter Second Number", type:"number", name: "secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type:"list",
        name:"operator",
        choices: ["Addition", "Subraction", "Multiplication","Division"],

    },
]);

// Condionnal statement if-else
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if (answer.operator === "Subraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("Invalid Input")
}

