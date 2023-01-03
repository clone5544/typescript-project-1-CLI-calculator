#!/usr/bin/env-Node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
     return new Promise((res)=>{
        setTimeout(res, 2000);
     }
   )
    
}

async function welcome(){
   let rainbowTitle = chalkAnimation.rainbow('calculator is getting ready');//start
   await sleep();
    rainbowTitle.stop();
    console.log(``);
    
   



}
await welcome();

async function askQuestion() {
    const answers = await inquirer
    .prompt
    ([
       { 
        type:"list",
        name:"operator",
        message:"which operation you want to use? \n",
        choices:["addition","subtraction","multiplication","division"]
       },
       {
        type:"number",
        name:"num1",
        message:"enter number 1: "
       },
       {
        type:"number",
        name:"num2",
        message:"enter number 2: "
       }



    ]);

   
    
    if
    (answers.operator == "Addition"){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)) ;
    }
    else if
    (answers.operator == "subtraction"){
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        
    }
    else if
    (answers.operator == "multiplication"){
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
 
    }
    else if
    (answers.operator == "division"){
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
};


async function startAgain(){
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: "do you want to start again? press Y or N",
        })
    } while 
    (again.restart == 'y' || again.restart == 'Y' ||  again.restart == 'yes' || again.restart == 'YES' )

};
    startAgain();