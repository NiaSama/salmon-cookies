'use strict';
//WORKING ON TABLE: 
// array that holds open hours for the stores
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// array that holds the location objects
var allLocations = [];
// variable storing cookies from all stores
var totalTotal = 0;

function MakeLocation(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randomCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookiesPerStore = 0;
  allLocations.push(this);
}
//calculating random customers per hour
MakeLocation.prototype.calcRanCustByHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    // console.log(this.randomCustPerHour[i]);
  }
};
//calc cookies sold per hour
MakeLocation.prototype.calcCookiesSoldPerHour = function () {
  for (var j = 0; j < hours.length; j++) {
    this.cookiesSoldPerHour.push(Math.round(this.randomCustPerHour[j] * this.avgCookies));
    //average customers per hour * avg cookies per customer = cookies sold per hour
  }
};
//Calc total cookies per store at the end of the day
MakeLocation.prototype.calcTotalCookiesPerStore = function () {
  for (var k = 0; k < hours.length; k++) {
    this.totalCookiesPerStore += this.cookiesSoldPerHour[k];
  }
};
function calcTotalTotal() {
  for (var n = 0; n < allLocations.length; n++) {
    totalTotal += allLocations[n].totalCookiesPerStore;
  }
}

function newLocations() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}

//names of locations and amount of cookies sold per hour
function fillArray() {
  for (var a = 0; a < allLocations.length; a++) {
    allLocations[a].calcRanCustByHour();
    allLocations[a].calcCookiesSoldPerHour();
    allLocations[a].calcTotalCookiesPerStore();
  }
}

//<tr> <th> </tr> Table head maker
var tableHeadEl = document.getElementById('tableHead');
function tableHeadMaker(inputArray) {
  var trEl = document.createElement('tr');
  var emptyEl = document.createElement('th');
  trEl.appendChild(emptyEl);
  for (var x = 0; x < inputArray.length; x++) {
    var thEl = document.createElement('th');
    thEl.textContent = inputArray[x];
    trEl.appendChild(thEl);
  }
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';
  trEl.appendChild(totalEl);
  tableHeadEl.appendChild(trEl);
}

//<tr> <td> </tr> Table row maker
function tableRowMaker(name, inputArray, totalCookiesPerStore) {
  var tableRowEl = document.getElementById('tableBody');
  var trEl = document.createElement('tr');
  //creating an element calling only the name of the locations from the allLocations varaible
  var nameEl = document.createElement('td');
  nameEl.textContent = name;
  trEl.appendChild(nameEl);
  for (var y = 0; y < inputArray.length; y++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = inputArray[y];
    trEl.appendChild(tdEl);
  }
  //creating an element calling only the total cookies at each location
  var totalCookiesEl = document.createElement('td');
  totalCookiesEl.textContent = totalCookiesPerStore;
  trEl.appendChild(totalCookiesEl);
  //attach Table Row Element to the Table in HTML
  tableRowEl.appendChild(trEl);
}

function fillData() {
  for (var q = 0; q < allLocations.length; q++) {
    tableRowMaker(allLocations[q].name, allLocations[q].cookiesSoldPerHour, allLocations[q].totalCookiesPerStore);
  }
}

//<t-footer> <td> </td> </t-footer> Create Table Footer
function tableFootMaker(inputArray) {
  var tableFoot = document.getElementById('tableFoot');
  tableFoot.innerHTML = '';
  var trEl = document.createElement('tr');
  var textTotalEl = document.createElement('td');
  textTotalEl.textContent = 'Total';
  trEl.appendChild(textTotalEl);
  //for loop in a for loop... allLocation[1-5].cookiesSoldPerHour[hours];
  for (var b = 0; b < hours.length; b++) { //for loop for the cookieSoldPerHour
    var hourlyTotal = 0;
    for (var c = 0; c < inputArray.length; c++) {
      hourlyTotal += inputArray[c].cookiesSoldPerHour[b];
      // console.log(hourlyTotal);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
  }
  //input array for totalTotal

  var totalTotalEl = document.createElement('td');
  totalTotalEl.textContent = totalTotal;
  trEl.appendChild(totalTotalEl);
  tableFoot.appendChild(trEl);
}

//WORKING ON FORMS AND EVENTS

var storeForm = document.getElementById('store-form');
function handleStoreAdd(event) {
  event.preventDefault();
  console.log(event.target.storename.value);
  if(!event.target.storename.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcook.value) {
    return console.log('Fields cannot be empty.');
  }
  var userInputLocation = new MakeLocation(event.target.storename.value, event.target.mincust.value, event.target.maxcust.value, event.target.avgcook.value); //userInputLocation is an instance (instances are objects that are made through a constructs)
  userInputLocation.calcRanCustByHour();
  userInputLocation.calcCookiesSoldPerHour();
  userInputLocation.calcTotalCookiesPerStore();
  //append to table
  tableRowMaker(userInputLocation.name, userInputLocation.cookiesSoldPerHour, userInputLocation.totalCookiesPerStore);
  tableFootMaker(allLocations);
}

storeForm.addEventListener('submit', handleStoreAdd); //function 'handleStoreAdd' does not have () because it is a call back, it will only be called when 'submit' has happened.


//storeForm.addEventListener('submit', handleStoreAdd);
//remember to clear the form by setting the value to null







//creating newLocations to populate into makeLocation that will push into allLocations
newLocations();
fillArray();
calcTotalTotal();

tableHeadMaker(hours);
fillData();
tableFootMaker(allLocations); //not correct...