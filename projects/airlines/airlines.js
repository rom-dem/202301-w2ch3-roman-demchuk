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

let passenger;
passenger = prompt("What is your name?");
if (passenger === null || passenger === "") {
  alert("Hello, anonymous. Here are the flights for today:");
} else {
  alert(`Hello, ${passenger}. Here are the flights for today: `);
}

let dailyFlights = () => {
  for (i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      console.log(
        "The flight from: 🛫 " +
          flights[i].from +
          " to: 🛬 " +
          flights[i].to +
          " costs: " +
          flights[i].cost +
          " €" +
          " and it has layovers."
      );
    } else {
      console.log(
        "The flight from: 🛫 " +
          flights[i].from +
          " to: 🛬 " +
          flights[i].to +
          " costs: " +
          flights[i].cost +
          " €" +
          " and it's a direct flight."
      );
    }
  }
};
dailyFlights();

let avgCost = () => {
  let avgCost =
    flights.reduce((acc, flight) => acc + flight.cost, 0) / flights.length;
  console.log("The average cost of all flights is: " + avgCost + " €.");
};
avgCost();

let scaleFlights = () => {
  let allScales = flights.reduce((acc, flight) => acc + flight.scale, 0);
  console.log(
    "Today there are: " + allScales + " flights that have a layover."
  );
};
scaleFlights();

let lateFlights = flights.filter((late) => late.id > 4);
let lastFlightsDestination = () => {
  console.log("Here you will find our last destinations of the day: ");
  for (i = 0; i < lateFlights.length; i++) {
    console.log(lateFlights[i].to);
  }
};
lastFlightsDestination();
