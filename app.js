var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//pike object start
var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  calcRandCustHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookies * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  calcTotalCookies: function () {
    for (var t = 0; t < hours.length; t++) {
      this.totalCookies = this.cookiesSoldPerHour[t] + this.totalCookies;
      // this.totalCookies += this.cookiesSoldPerHour[t];
      console.log(this.totalCookies);
    }
  },
  renderList: function () {
    var pikePlaceList = document.getElementById('pikePlaceList');
    this.calcRandCustHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookies();
    //Interact with DOM - Pike
    for (var c = 0; c < hours.length; c++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[c] + ': ' + this.cookiesSoldPerHour[c] + ' cookies';
      console.log(liEl);
      pikePlaceList.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    pikePlaceList.appendChild(totalLiEl);
  },

}; //pike object end
pike.renderList();
//seatac object start
var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  calcRandCustHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[j] * this.avgCookies));
      console.log(this.calcCookiesSoldPerHour[j]);
    }
  },
  calcTotalCookies: function () {
    for (var t = 0; t < hours.length; t++) {
      this.totalCookies += this.cookiesSoldPerHour[t];
      console.log(this.totalCookies);
    }
  },
  renderList: function () {
    var seaTacList = document.getElementById('seaTacList');
    this.calcRandCustHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookies();
    //interact with DOM - SeaTac
    for (var c = 0; c < hours.length; c++) {
      var seaTacLiEl = document.createElement('li');
      seaTacLiEl.textContent = hours[c] + ': ' + this.cookiesSoldPerHour[c] + ' cookies';
      seaTacList.appendChild(seaTacLiEl);
    }
    var seaTacTotal = document.createElement('li');
    seaTacTotal.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seaTacList.appendChild(seaTacTotal);
  },
}; //seatac object end
seaTac.renderList();
//Seattle Center object start
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  calcRandCustHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[j] * this.avgCookies));
      console.log(this.calcCookiesSoldPerHour[j]);
    }
  },
  calcTotalCookies: function () {
    for (var t = 0; t < hours.length; t++) {
      this.totalCookies += this.cookiesSoldPerHour[t];
      console.log(this.totalCookies);
    }
  },
  renderList: function () {
    var seattleCenterList = document.getElementById('seattleCenterList');
    this.calcRandCustHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookies();
    //interact with DOM - SeattleCenter
    for (var c = 0; c < hours.length; c++) {
      var seattleCenterLiEl = document.createElement('li');
      seattleCenterLiEl.textContent = hours[c] + ': ' + this.cookiesSoldPerHour[c] + ' cookies';
      seattleCenterList.appendChild(seattleCenterLiEl);
    }
    var seattleCenterTotal = document.createElement('li');
    seattleCenterTotal.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seattleCenterList.appendChild(seattleCenterTotal);
  },
}; //seattle center end
seattleCenter.renderList();
//Cap Hill object start
var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  calcRandCustHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[j] * this.avgCookies));
      console.log(this.calcCookiesSoldPerHour[j]);
    }
  },
  calcTotalCookies: function () {
    for (var t = 0; t < hours.length; t++) {
      this.totalCookies += this.cookiesSoldPerHour[t];
      console.log(this.totalCookies);
    }
  },
  renderList: function () {
    var capHillList = document.getElementById('capHillList');
    this.calcRandCustHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookies();
    //interact with DOM - capHill
    for (var c = 0; c < hours.length; c++) {
      var capHillLiEl = document.createElement('li');
      capHillLiEl.textContent = hours[c] + ': ' + this.cookiesSoldPerHour[c] + ' cookies';
      capHillList.appendChild(capHillLiEl);
    }
    var capHillTotal = document.createElement('li');
    capHillTotal.textContent = 'Total: ' + this.totalCookies + ' cookies';
    capHillList.appendChild(capHillTotal);
  },
}; //Cap Hill end
capHill.renderList();
//Alki object start
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  calcRandCustHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[j] * this.avgCookies));
      console.log(this.calcCookiesSoldPerHour[j]);
    }
  },
  calcTotalCookies: function () {
    for (var t = 0; t < hours.length; t++) {
      this.totalCookies += this.cookiesSoldPerHour[t];
      console.log(this.totalCookies);
    }
  },
  renderList: function () {
    var alkiList = document.getElementById('alkiList');
    this.calcRandCustHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookies();
    //interact with DOM - alki
    for (var c = 0; c < hours.length; c++) {
      var alkiLiEl = document.createElement('li');
      alkiLiEl.textContent = hours[c] + ': ' + this.cookiesSoldPerHour[c] + ' cookies';
      alkiList.appendChild(alkiLiEl);
    }
    var alkiTotal = document.createElement('li');
    alkiTotal.textContent = 'Total: ' + this.totalCookies + ' cookies';
    alkiList.appendChild(alkiTotal);
  },
}; //Alki end
alki.renderList();