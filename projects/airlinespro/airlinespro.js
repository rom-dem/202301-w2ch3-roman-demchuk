const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
 ];

const passenger = prompt("What is your name?");
    if (passenger === null || passenger === ""){
        alert("Hello, anonymous. Here are the flights for today:")
    } else {
        alert(`Hello, ${passenger}. Here are the flights for today: `)
    };

const avgCost = () => {
        let avgCost = flights.reduce((acc, flight) => acc + flight.cost, 0) / flights.length
        console.log("The average cost of all flights is: " + avgCost + " €.")  
}
const scaleFlights = () => {
let allScales = flights.reduce((acc, flight) => acc + flight.scale, 0)
console.log("Today there are: " + allScales + " flights that have a layover.")
}
const lateFlights = flights.filter( late => late.id > 4);
    let lastFlightsDestination = () => {
        console.log("Here you will find our last destinations of the day: ")
        for (i = 0; i < lateFlights.length; i++){
            console.log(lateFlights[i].to);
        }
}
const showFilteredResults = (item) => {
    item.forEach((flight) => {
        if (flight.scale === true) {
         console.log(`Flight with ID nº ${flight.id} from 🛫 ${flight.from} headed to 🛬 ${flight.to} costs ${flight.cost} € and it has a layover.`)
     } else {
         console.log(`Flight with ID nº ${flight.id} from 🛫 ${flight.from} headed to 🛬 ${flight.to} costs ${flight.cost} € and it's a direct flight.`)
     
     };
     });
 };
const askForRole = () => {
    const role = prompt('Are you USER or ADMIN?');
    if(role === null){
        quit();
    } else if(role.toUpperCase() !== 'USER' && role.toUpperCase() !== 'ADMIN'){
        alert('Enter a valid role');
        askForRole();
    } else {
        return role.toUpperCase();
    }
}
const askForUserAction = () =>{
    const userAction = prompt('Search for flights that cost less than:')
    if(userAction === null){
        askForUserAction();
    } else if(isNaN(userAction)){
        alert('Enter a valid amount:');
        askForUserAction();
    } else {
        return Number(userAction);
    }
}
const askForAdminAction = () => {
    const adminAction = prompt('Do you want to CREATE or to DELETE?');
    if(adminAction === null) {
        askForAdminAction();
    } else if(adminAction.toUpperCase() !== "CREATE" && adminAction.toUpperCase() !== "DELETE") {
        alert('Enter a valid action, please.');
        askForAdminAction();
    } else {
        return adminAction.toUpperCase();
    }

}
const askFrom = () => {
    const flightAtributeFrom = prompt('New flight. Where from?');
    if (flightAtributeFrom === null || flightAtributeFrom === ""){
        alert("Input city of origin.");
        askFrom();
    }
    return flightAtributeFrom;
}
const askTo = () => {
    const flightAtributeTo = prompt('New flight. Where to?');
    if (flightAtributeTo === null || flightAtributeTo === ""){
        alert("Input destination city.");
        askTo();
    }
    return flightAtributeTo;
}
const askCost = () => {
    const flightAtributeCost = prompt('New flight. How much €?');
    if (flightAtributeCost === null || flightAtributeCost === ""){
        alert("Input the cost of this flight.");
        askCost();
    } if(isNaN(flightAtributeCost)) {
        askCost();
    }
    return Number(flightAtributeCost);
}
const askScale = () => {
    const flightAtributeScale = confirm("This flight has a layover?");
    return flightAtributeScale;
    }

const addFlight = () => {
    const newFlight = {};
    newFlight.id = flights.length;
    newFlight.from = askFrom();
    newFlight.to = askTo();
    newFlight.cost = askCost();
    newFlight.scale = askScale();
    flights.push(newFlight);
}
const adminActionsDoThis = () =>{
    const adminActionsResult = askForAdminAction();
    if (adminActionsResult === 'CREATE'){
       while (flights.length <16 ) {
        addFlight();
        let confirmation = confirm('Would you like to create an other flight?')
        if (confirmation === true){
            addFlight();
        } else {
            showFilteredResults(flights);
            quit();
            break
        }
        if(flights.length > 15){
        alert('You can\'t have more than 15 flights');
        showFilteredResults(flights);
    }
    }
    } else if(adminActionsResult === 'DELETE'){
        /*const deleteFlight = +prompt('Insert the ID of the flight you want to delete:')
        let remainingFlights = flights.filter(
            (flight) => flight.id === Number(deleteFlight)
        )
        showFilteredResults(flights);
    } else if(adminActionsResult === null){
            quit();
    } else {
            alert('Enter a valid action')
            adminActionsDoThis(); }*/
    const deleteFlight = +prompt('Insert the ID of the flight you want to delete:')
        flights.splice(deleteFlight, 1);
        showFilteredResults(flights);
     } else if(adminActionsResult === null){
        quit();
     } else{
        alert('Enter a valid action')
        adminActionsDoThis();
     }
}
const userActionsDoThis = () => {
    const userActionsResult = askForUserAction();
    console.log(`List of flights that cost ${userActionsResult} or less:`)
    let filteredFlights = flights.filter(
        (flight) => flight.cost <= userActionsResult
    )
    showFilteredResults(filteredFlights);
}
const quit = () => {
    alert('You will now quit the site');
}

const playApp = () => {
    showFilteredResults(flights);
    avgCost();
    scaleFlights();
    lastFlightsDestination();
    const userRole = askForRole();
   if( userRole === "ADMIN"){
    adminActionsDoThis();
   }else if (userRole === "USER"){
    userActionsDoThis();
   }
}
playApp();