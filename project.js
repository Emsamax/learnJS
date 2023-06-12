// 1. despot money
// 2. determine number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;



const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("invalid deposit amount, try again");
        } else {
            return numberDepositAmount;
        }
    }

};

const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter number of lines (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, line) =>{
    while(true){
        const bet = prompt("Enter the bet per line : ");
        const numberOfBet = parseFloat(bet);

        if(isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance/line){
            console.log("Invalid bet, try again");
        } else {
            return numberOfBet;
        }
    }
}


const numberOfLines = getNumberOfLines();
let balance  = deposit();
const bet = getBet(balance, numberOfLines)


