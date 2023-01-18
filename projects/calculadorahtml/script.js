const displayScreen = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number-buttons");

const operatorButtons = document.querySelectorAll(".operator-buttons .operator");

const sqrtButton = document.querySelector(".operator-buttons .sqrt");

const clearOne = document.querySelector(".operator-buttons .clear-one");

const clearAll = document.querySelector(".operator-buttons .clear-all");

const equals = document.querySelector(".operator-buttons .equals");

let restart = false;

let onePoint = false;

let zeroPoint = false;

const checkForOperators = () =>{
    return displayScreen.value.includes("-", 1)
    || displayScreen.value.includes("+")
    || displayScreen.value.includes("*")
    || displayScreen.value.includes("/")
};

const checkForPointAfterZero = () =>{
    return displayScreen.value.includes("+0")
    || displayScreen.value.includes("-0")
    || displayScreen.value.includes("*0")
    || displayScreen.value.includes("/0")
};

const checkForWrongScreen = () =>{
    return displayScreen.value === "Infinity"
    || displayScreen.value === "-Infinity"
    || displayScreen.value === "NaN"
};

const restartParameters = () =>{
    restart = true;
    onePoint = false;
    zeroPoint = false;
}

const errorMessage = () =>{
    displayScreen.value = "👿Error👿";
    restartParameters();
};

numberButtons.forEach( (button) => {
    button.addEventListener("click", (event) => {
        let value = event.target.value
        if (restart){
            displayScreen.value = '';
            restart = false;
        };
        if (checkForPointAfterZero() && value == "0" && !zeroPoint && !onePoint){
            displayScreen.value += ".";
            onePoint = true;
            zeroPoint = true;
            return;
        };
        if (onePoint && value == "."){
            return;
        };
        if (value == "."){
            onePoint = true;
        }
        if (displayScreen.value == "0" && value == "0"){
            return;
        }
        displayScreen.value += value
    });
});

operatorButtons.forEach( (button) => {
    button.addEventListener("click", (event) => {
        restart = false;
        onePoint = false;
        if(displayScreen.value === "👿Error👿"){
            return;
        };
        if(checkForOperators() && displayScreen.value.length > 2){
            let result = eval(displayScreen.value);
            displayScreen.value = result;
        };
        if(checkForOperators()){
            return;
        };
        if (restart){
            displayScreen.value = '';
            restart = false;
        } 
        let value = event.target.value;
        displayScreen.value += value;
    });
});

equals.addEventListener("click", () => {
    if(displayScreen.value === "" || displayScreen.value === "👿Error👿"){
        return;
    } else if (restart){
        displayScreen.value = '';
        restart = false;
    } else {
        let result = eval(displayScreen.value);
        displayScreen.value = result;
        restartParameters();
        if(checkForWrongScreen()) {
            errorMessage();
        }; 
};
});

sqrtButton.addEventListener("click", () => {
    if (displayScreen.value < 0) {
        errorMessage();
    } else { 
    let result = Math.sqrt(displayScreen.value);
    displayScreen.value = result;
    restartParameters();
    if(checkForWrongScreen()) {
            errorMessage();
    };
};
});

clearAll.addEventListener("click", () => {
    displayScreen.value = "";
    onePoint = false;
    zeroPoint = false;
});

clearOne.addEventListener("click", () =>{
    if(displayScreen.value === "👿Error👿") {
        displayScreen.value = "";
        onePoint = false;
        zeroPoint = false;
    } else { 
    displayScreen.value = displayScreen.value.slice(0, -1);
    };
});