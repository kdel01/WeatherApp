// Display City Name After Search
function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-city");

  let h2 = document.querySelector("#current-city");
  h2.innerHTML = `Current City: ${input.value}`;
}

let form = document.querySelector("#form");
form.addEventListener("submit", searchCity);

// Display Current Date and Time

function checkMins(i) {
  if (i < 10) {
    i = "0" + i;
  } else {
    i = i;
  }
  return i;
}

let now = new Date();
let hour = now.getHours();
let minute = checkMins(now.getMinutes());

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = week[now.getDay()];

let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${hour}:${minute}`;

//Temp Translations
// Change temp from F to C
function changeToC(event) {
  event.preventDefault();
  let tempC = document.querySelector("#temperature");
  tempC.innerHTML = "17";
}
//Change Temp from F to C
function changeToF(event) {
  event.preventDefault();
  let tempC = document.querySelector("#temperature");
  tempC.innerHTML = "66";
}

let makeCel = document.querySelector("#celcius");
makeCel.addEventListener("click", changeToC);

let makeFar = document.querySelector("#faren");
makeFar.addEventListener("click", changeToF);
