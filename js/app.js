
'use strict';
//Data ==========================================
let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



let allcookieshops = [];
//Get cookie sold to table 
let cookieshopTable = document.getElementById('cookiesTable');
//Get to add shop to form
let cookieShopForm = document.getElementById('AddStore');
//funmctionally ==================================
//Constructor for store sales data
function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  allcookieshops.push(this);

}



CookieShop.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShop.prototype.cookiesPerHr = function () {
  return Math.round(this.cookiesPerSale * this.custPerHr());
};


CookieShop.prototype.render = function() { 
    let trElement = document.createElement('tr');
    let thElement = document.createElement('th');
    thElement.textContent = this.location;
    trElement.appendChild(thElement);
  
    let cookiesSold = 0;
    let totalCookiesSold = 0;
  
    for (let i = 0; i < operationHour.length; i++) {
  
      cookiesSold = this.cookiesPerHr();
  
      var tdElement = document.createElement('td');
      tdElement.textContent = cookiesSold;
      trElement.appendChild(tdElement);
  
      this.cookiesSoldPerHr.push(cookiesSold);
  
      totalCookiesSold += cookiesSold;
    }
  
    tdElement = document.createElement('td');
    tdElement.textContent = totalCookiesSold;
    trElement.appendChild(tdElement);
    cookieshopTable.appendChild(trElement);
  };


  
function makeHeaderRow() { // Header Row Function
    let theadElement = document.createElement('thead');
    let trElement = document.createElement('tr');
    let thElement = document.createElement('th');
    thElement.textContent = '';
    trElement.appendChild(thElement);
  
    for (let i = 0; i < operationHour.length; i++) {
      thElement = document.createElement('th');
      thElement.textContent = operationHour[i];
      trElement.appendChild(thElement);
    }
  
    thElement = document.createElement('th');
    thElement.textContent = 'Daily Totals';
    trElement.appendChild(thElement);
    theadElement.appendChild(trElement);
  
    cookieshopTable.appendChild(theadElement);
  }


  
function totalCookiesPerHour() { // Bottom Totals
    let trElement = document.createElement('tr');
    let thElement = document.createElement('th');
    thElement.textContent = 'Totals';
    trElement.appendChild(thElement);
  
    let grandTotalCookies = 0;
  
    for (let i = 0; i < operationHour.length; i++) {
      let totalCookies = 0;
      for( let j = 0; j < allcookieshops.length; j++) {
        totalCookies += allcookieshops[j].cookiesSoldPerHr[i];
        grandTotalCookies += allcookieshops[j].cookiesSoldPerHr[i];
      }
      var tdElement = document.createElement('td');
      tdElement.textContent = totalCookies;
      trElement.appendChild(tdElement);
  
    }
    tdElement = document.createElement('td');
    tdElement.textContent = grandTotalCookies;
    trElement.appendChild(tdElement);
    cookieshopTable.appendChild(trElement);
  }

  new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

function renderallcookieshops() {
  for(let i in allcookieshops) {
    allcookieshops[i].render();
  }

  console.log(allcookieshops);
}


// code to add new shop 
function addNewCookieShop(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target.shopLocation);
    console.log
    // Get target of event 
    (event.target.shopLocation.value);
    let newLoc = event.target.shopLocation.value;
    //The parseInt() function parses a string and returns an integer.
    
    let newMinCust = parseInt(event.target.minCust.value);
    let newMaxCust = parseInt(event.target.maxCust.value);
    let  newCookiesPerSale = parseInt(event.target.cookiesPerSale.value);
  // New Keyword to call to function creates a new object
    new CookieShop(newLoc, newMinCust, newMaxCust, newCookiesPerSale);
  
  // Access & Update text with TextContent to Table 
    cookieshopTable.innerHTML = '';
    makeHeaderRow();
    renderallcookieshops();
    totalCookiesPerHour();
  }
  //Event Listener to Form
  cookieShopForm.addEventListener('submit', addNewCookieShop);
  
  makeHeaderRow();
  renderallcookieshops();
  totalCookiesPerHour();
