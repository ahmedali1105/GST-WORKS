"use strict";
// inquirer install
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//currency convertions
let currencyconvertion = {
    "pkr": {
        "usd": 0.0036,
        "gbp": 0.0028,
        "pkr": 1,
    },
    "gbp": {
        "usd": 1.26,
        "gbp": 1,
        "pkr": 350.76,
    },
    "usd": {
        "usd": 1,
        "gbp": 0.79,
        "pkr": 277.54,
    },
};
// prompt user for input 
const answer = await inquirer_1.default.prompt([{
        type: "list",
        name: "from",
        messege: "please select your currency?",
        choices: ["pkr", "gbp", "usd"],
    },
    {
        type: "list",
        name: "to",
        messege: "please select your convertion rate",
        choices: ["pkr", "gbp", "usd"],
    },
    { type: "number",
        name: "amount",
        messege: "please enter the amount yourwish to convert",
    }
]);
//destructuring user input
const { from, to, amount } = answer;
//perform currency convertion
if (from && to && amount) {
    let result = currencyconvertion[from][to] * amount;
    console.log("your convertion from ${from} to ${to} is ${result}");
}
else {
    console.log("invalid converstion");
}
