let num1;
let num2;
const results = [];

const checkNum1 = () => {
num1 = prompt("Please input first number.\nUse dots and not commas for decimals.");
if (num1 === "" || isNaN(+num1) || num1 === null){
    num1 = prompt("It is not a number. Try again");
}
}
checkNum1();

const checkNum2 = () => {
num2 = prompt("Please input second number.\nUse dots and not commas for decimals.\nObtain square root if only one number is entered.");
if (num2 === "" || isNaN(+num2) || num2 === null){
    num2 = prompt("It is not a number.\nTry again. \nObtain square root if only one number is entered.");
}
}
checkNum2();

const operations = () => {
    let sum = Number(num1) + Number(num2); //només la suma no funcionava, juntava els números. per això els converteixo en Number(). no entenc per què...
    if (sum % 1 !== 0){
        sum = sum.toFixed(3)};
    let sub = num1 - num2;
    if (sub % 1 !== 0){
        sub = sub.toFixed(3)};
    let prod = num1 * num2;
    if (prod % 1 !== 0){
        prod = prod.toFixed(3)};
    let div = num1 / num2;
    if (div % 1 !== 0){
        div = div.toFixed(3)};
    results.push(sum, sub, prod, div);
};

if (num2 === "" || num2 === null){
    let squareroot = Math.sqrt(num1)
        if (squareroot % 1 !== 0){
            squareroot = squareroot.toFixed(3);
        }
        console.log(`The square root of ${num1} is ${squareroot}.`)
    } else if (num1 === "" || num1 === null){
            let squareroot = Math.sqrt(num2)
                if (squareroot % 1 !== 0){
                    squareroot = squareroot.toFixed(3);
                }
                console.log(`The square root of ${num2} is ${squareroot}`)
            } else {          
operations();

console.log( `The sum of ${num1} and ${num2} is ${results[0]}\nThe subtract of ${num1} and ${num2} is ${results[1]}\nThe product of ${num1} and ${num2} is ${results[2]}\nThe division of ${num1} and ${num2} is ${results[3]}`)
};