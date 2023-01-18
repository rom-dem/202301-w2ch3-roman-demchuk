const min = 1; //de 1
const max = 45; // a 90

let player = "";

let cardRandom = [];
let line1 = [];
let line2 = [];
let line3 = [];

let drum = [];

const getRandomNumber = (minim, maxim) => {
    const minNum = Math.ceil(minim);
    const maxNum = Math.floor(maxim);
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

const selectPlayer = () => { 
    player = prompt("What is your name?");
    if (player === null || player === "") {
        player = "anonymous";
        alert(`Hello, ${player}. Welcome to Simple Bingo!`);
        return player;
    } else {
        alert(`Hello, ${player}.  Welcome to Simple Bingo!`);
        return player;
    };
    };

const rules = () => {
    console.log(    `${player} the rules are simple:
                    \nThere are ${max} balls in the drum.
                    \nThe sooner you cover all the numbers on your card,
                    \nthe smaller your round counter will be. Good luck! Let's play!!!`);
};

const compareNumbers = (a, b) => {
        return a - b;
      };

const generateCard = () => {
    const maxCardNumber = 15;
    do {
        let randomNumber = getRandomNumber(min, max);
        while (cardRandom.includes(randomNumber) === false ){
            cardRandom.push(randomNumber);
        };
    } while (cardRandom.length < maxCardNumber);
    cardRandom = cardRandom.sort(compareNumbers);
    line1.push(cardRandom[0], cardRandom[3], cardRandom[6], cardRandom[9], cardRandom[12])
    line2.push(cardRandom[1], cardRandom[4], cardRandom[7], cardRandom[10], cardRandom[13])
    line3.push(cardRandom[2], cardRandom[5], cardRandom[8], cardRandom[11], cardRandom[14])
};

const generateDrum = () => {
    do {
        let randomNumber = getRandomNumber(min, max);
        while ( drum.includes(randomNumber) === false){
            drum.push(randomNumber);
        }
    }
    while (drum.length < max);
    return drum;

};

const compareCardToDrum = () =>{
    for (let i = 0; i <= drum.length-1; i++){ 
        checkBingo();
        if (bingoSwitch !== 0){
            checkBingo;
            break;
        }
        let newBall = confirm(`The ball that comes out of the drum is: ${drum[i]}. Continue?`);
        roundCounter();
        
    if (newBall === true){
        for (let k = 0; k <= line1.length; k++){
            if (line1[k] === drum[i]){
                line1[k] = "❎";
                printCard();
                checkLinePrize();
                break;
            };
        };
        for (let k = 0; k <= line2.length; k++){
            if (line2[k] === drum[i]){
                line2[k] = "❎";
                printCard();
                checkLinePrize();
                break;
            };
        }
        for (let k = 0; k <= line3.length; k++){
            if (line3[k] === drum[i]){
                line3[k] = "❎";
                printCard();
                checkLinePrize();
                break;
            };
        }
    } else {
        return;
    };
    };
};

let prizeSwitch = 0
const checkLinePrize = () => {
    if (prizeSwitch === 0) { 
    if (line1[0] === "❎" && line1[1] === "❎" && line1[2] === "❎" && line1[3] === "❎" && line1[4] === "❎") {
        console.log(`🎁 Lucky you, you've won a line prize! 🎁`);
        prizeSwitch++;
    };
    if (line2[0] === "❎" && line2[1] === "❎" && line2[2] === "❎" && line2[3] === "❎" && line2[4] === "❎") {
        console.log(`🎁 Lucky you, you've won a line prize! 🎁`);
        prizeSwitch++;
    };
    if (line3[0] === "❎" && line3[1] === "❎" && line3[2] === "❎" && line3[3] === "❎" && line3[4] === "❎") {
        console.log(`🎁 Lucky you, you've won a line prize! 🎁`);
        prizeSwitch++;
    };
};
};

let rounds = 0;

const roundCounter = () => {
    rounds++;
};

let bingoSwitch = 0;

const checkBingo = () => {
    if (line1.every((value, index) => value === line2[index]) && line1.every((value, index) => value === line3[index])) {
        bingoSwitch++;
        console.log(`🏆 BINGO!!! 🏆, you've won in ${rounds} rounds.`);
        quit();
    };
};

const printCard = () =>{
    console.log("*** Your lucky numbers ***")
    console.log(`Line 1: ${line1}`);
    console.log(`Line 2: ${line2}`);
    console.log(`Line 3: ${line3}`);
};

const quit = () => {
    alert('You will now quit the game.');
};

const repeat = () => {
    let repetition = confirm(`Are you happy with this card, ${player}?`)
    if (repetition === true) {
        return;
    } else {
        cardRandom = [];
        line1 = [];
        line2 = [];
        line3 = [];
        generateCard();
        printCard();
        repeat();
    };
};

const replay = () => {
    let repetition = confirm(`${player}, do you want to start a new game?`)
    if (repetition === true) {
        cardRandom = [];
        line1 = [];
        line2 = [];
        line3 = [];
        rounds = 0;
        scores = [];
        bingoSwitch = 0;
        prizeSwitch = 0;
        main();
    } else {
        quit();
    };
};

const randomRounds = () =>{
    let rounds = Math.floor(Math.random()*(max - 15 + 1)+15);
    return rounds;

};

let scores = [];

const main = () => {
    selectPlayer();
    rules();
    generateCard();
    printCard();
    repeat();
    generateDrum();
    compareCardToDrum();
    randomRounds();
    if (rounds >= 15 ) {
    scores.push(`${rounds} rounds. Player: ${player}`,
                `${randomRounds()} rounds. Player: Josep Maria`,
                `${randomRounds()} rounds. Player: Orest`,
                `${randomRounds()} rounds. Player: Franziska`,)
    console.table(scores.sort());
};
    replay();
};
main();