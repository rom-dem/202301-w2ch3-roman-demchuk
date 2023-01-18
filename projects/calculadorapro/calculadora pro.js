let numbers = [];

const quit = () => {
  alert("You will now quit the site");
};

const exit = () => {
  alert(`Bye`);
};

const repeat = () => {
  const repetition = confirm(`Do you want to repeat with new numbers?`);
  if (repetition === true) {
    numbers = [];
    main();
  } else {
    quit();
  }
};

const results = () => {
  if (numbers.length === 0) {
    alert(`No input data were given`);
    exit();
  } else if (numbers.length === 1) {
    let sq = Math.sqrt(numbers);
    if (sq % 1 !== 0) {
      sq = sq.toFixed(3);
    }

    alert(`The square root of your number is: ${sq}`);
  } else {
    alert(`The numbers that you've introduced are ${numbers}`);
    sum();
    sub();
    prod();
    div();
  }
};

const getUserNumbers = () => {
  let number;
  do {
    number = prompt(
      "Please input a number to do the calculations. Use a dot for decimals. Press CANCEL to finish."
    );
    if (number === null) {
      return;
    }

    if (Number.isNaN(Number(number)) || number === "" || number === " ") {
      alert("Input numbers only");
    } else {
      numbers.push(Number(number));
    }
  } while (number !== null);

  return number;
};

const sum = () => {
  let thisOperation = numbers.reduce((acc, number) => acc + number);
  if (thisOperation % 1 !== 0) {
    thisOperation = thisOperation.toFixed(3);
  }

  console.log(`The sum of all numbers = ${thisOperation}`);
};

const sub = () => {
  let thisOperation = numbers.reduce((acc, number) => acc - number);
  if (thisOperation % 1 !== 0) {
    thisOperation = thisOperation.toFixed(3);
  }

  console.log(`The subtract of all numbers = ${thisOperation}`);
};

const prod = () => {
  let thisOperation = numbers.reduce((acc, number) => acc * number);
  if (thisOperation % 1 !== 0) {
    thisOperation = thisOperation.toFixed(3);
  }

  console.log(`The product of all numbers = ${thisOperation}`);
};

const div = () => {
  let thisOperation = numbers.reduce((acc, number) => acc / number);
  if (thisOperation % 1 !== 0) {
    thisOperation = thisOperation.toFixed(3);
  }

  console.log(
    `The division of all numbers = ${thisOperation} \n ****************`
  );
};

const main = () => {
  getUserNumbers();
  results();
  repeat();
};

main();
