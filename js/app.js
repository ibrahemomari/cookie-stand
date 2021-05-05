// // 'use strict';

// // // decleartions of objects
// // let Seattle,Tokyo,Dubai,Paris,Lima;
// // // array that have the cookies per hour
// // let CookiesPerHours;
// // // variables related CPH fnction
// // let dayTime , finalArray=[];

// // // Seattle object
// // Seattle={
// //     name:'Seattle',
// //     min:23 ,
// //     max:65,
// //     // ACPC=[],
// //     average: function()
// //     {

// //          return Math.floor(Math.random() * (this.max - this.min) + this.min);

// //     }



// // };


// // let sum=0,x=0;

// // function CPH()
// // {
// //     for(let i=0;i<14;i++)
// //     {
// //         x=Seattle.average();
// //         sum+=x;
// //         if(i<=7)
// //         {
// //             dayTime=`${i+6}AM: `+x+' cookies';

// //         }
// //         else if (i>7)
// //         {
// //             dayTime=`${i+6}PM: `+x+' cookies';

// //         }
// //         console.log(dayTime);


// //     }


// //     console.log('Total:'+sum+' cookies');

// // }


// // CPH();




// // Tokyo object
// // Tokyo={
// //     name:'Tokyo',
// //     min: ,
// //     max: ,
// //     average:

// // };
// // // Dubai object
// // Dubai={
// //     name:'Dubai' ,
// //     min: ,
// //     max: ,
// //     average:

// // };
// // // Paris object
// // Paris={
// //     name:'Paris' ,
// //     min: ,
// //     max: ,
// //     average:

// // };
// // // Lima object
// // Lima={
// //     name:'Lima',
// //     min: ,
// //     max: ,
// //     average:

// // };

// // array of work hours 
// let Hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// let allStoreHours=[];
// let sumation=[];
// let stores=[];

// let parent=document.getElementById('salesTable');

// // constructor for the Salmon Cookies
// function SalmonCookies(location, min, max, avg) {
//     let sales=[] , sum=0;
//     this.location = location;
//     this.min = min;
//     this.max = max;
//     this.avg = avg;
//     this.sales=sales;
//     this.sum=sum;
    
//     stores.push(this)

// }

// // Random number prototype for Customers

// SalmonCookies.prototype.customersPerHour = function () {
//     return Math.floor((Math.random() * ((this.max) - (this.min)) + this.min) * this.avg);
// }


// // process prototype

// SalmonCookies.prototype.process = function () {
//     let NumOfCookies;
//     for (let i = 0; i < Hours.length; i++) {
//         NumOfCookies=Math.floor((Math.random() * ((this.max) - (this.min)) + this.min) * this.avg);
//         // console.log(NumOfCookies);
//         this.sum+=NumOfCookies;
//         this.sales.push(NumOfCookies);
//         allStoreHours[i]=this.sales[i];
        
//     }
   
        
  
   
//     // console.log(this.sum);
//     this.sales.push(this.sum);
   
//     // console.log(this.sales);
//     // console.log(this.sales);
//     if(sumation.length==0)
//     {
//         sumation=this.sales;
        
//     }
//     else
//     {
//         for (let i = 0; i < this.sales.length; i++) {
      
//             sumation[i]=sumation[i]+this.sales[i];
            
//         }
//     }
 
//     // console.log(sumation);
// }



// // total for evrey hour

// function defultRender ()
// {
//     let th=[];
//     let parent=document.getElementById('cookies');
//     let table=document.createElement('table');
//     parent.appendChild(table);
//     table.setAttribute('id','salesTable');
//     //  row 1 ------------------------------------
//     let tr1=document.createElement('tr');
//     table.appendChild(tr1);
//     let thFirst1=document.createElement('th');
//     tr1.appendChild(thFirst1);
//     thFirst1.textContent="LOCATION";
//      for(let i=0;i<Hours.length;i++)
//      {
//          th[i]=document.createElement('th');
//          tr1.appendChild(th[i]);
//          th[i].textContent=Hours[i]
        
//      }
//      let thLast1=document.createElement('th');
//      tr1.appendChild(thLast1);
//      thLast1.textContent="Daily Location Total";
//     //  console.log(parent);


   
// }

// defultRender();
// // render prototype

// SalmonCookies.prototype.render = function () {
//     let td=[];
    
//     let parent=document.getElementById('salesTable');
//     let tr=document.createElement('tr');

//     let tdFirst=document.createElement('td');
//     tr.appendChild(tdFirst);
//     tdFirst.textContent=this.location;

//     parent.appendChild(tr);
//     for(let i=0; i<this.sales.length;i++)
//     {
//         td[i]=document.createElement('td');
//         tr.appendChild(td[i]);
//         td[i].textContent=this.sales[i];
        
//     }

  
    
    
    

// }


// function lastRow()
// {
   
//     // console.log(parent);
// }

// function Total(array)
// {
 
    
//     // console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         ssss[i] =ssss[i]+ array[i];
        
//     }

// // console.log(ssss);
    
// }


// // creat an objects
// let Seattle = new SalmonCookies('Seattle', 23, 65, 6.3);

// let Tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);


// let Dubai = new SalmonCookies('Dubai', 11, 38, 3.7);


// let Paris = new SalmonCookies('Paris', 20, 38, 2.3);


// let Lima = new SalmonCookies('Lima', 2, 16, 4.6);


// for (let i = 0; i < stores.length; i++) {
    
    
//     stores[i].render()
// }



// function adddddd()
// {
//     let Limas = new SalmonCookies('Limsssa', 2, 16, 4.6);

//     Limas.render();




// }

// //  addEventListener for creat new store ...................................

// let forms=document.getElementById('AddStore');

// forms.addEventListener('submit',addStore);




// function addStore(event)
// {
//     event.preventDefault();

//     // let location,min,max,avg;

//     // // get form input values

//     // location= event.target.location.value;
//     // min= Number(event.target.minimum.value);
//     // max= Number(event.target.maximum.value);
//     // avg= Number(event.target.average.value);

//     // console.log(avg);

//     // new SalmonCookies(location,min , max, avg);


  
//     //  console.log();

//      adddddd();
     
// }



// lastRow();


// // call function to display the total row -----------------------------------


'use strict';
//Data ==========================================
var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



var allcookieshops = [];
//Get cookie sold to table 
var cookieshopTable = document.getElementById('cookiesTable');
//Get to add shop to form
var cookieShopForm = document.getElementById('AddStore');
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
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = this.location;
    trElement.appendChild(thElement);
  
    var cookiesSold = 0;
    var totalCookiesSold = 0;
  
    for (var i = 0; i < operationHour.length; i++) {
  
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
    var theadElement = document.createElement('thead');
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = '';
    trElement.appendChild(thElement);
  
    for (var i = 0; i < operationHour.length; i++) {
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
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = 'Totals';
    trElement.appendChild(thElement);
  
    var grandTotalCookies = 0;
  
    for (var i = 0; i < operationHour.length; i++) {
      var totalCookies = 0;
      for( var j = 0; j < allcookieshops.length; j++) {
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

  new CookieShop('First and Pike', 23, 65, 6.3);
new CookieShop('SeaTac', 3, 24, 1.2);
new CookieShop('Seattle Center', 11, 38, 3.7);
new CookieShop('Capitol Hill', 20, 38, 2.3);
new CookieShop('Alki', 2, 16, 4.6);

function renderallcookieshops() {
  for(var i in allcookieshops) {
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
    var newLoc = 
    //The parseInt() function parses a string and returns an integer.
    event.target.shopLocation.value;
    var newMinCust = parseInt(event.target.minCust.value);
    var newMaxCust = parseInt(event.target.maxCust.value);
    var newCookiesPerSale = parseInt(event.target.cookiesPerSale.value);
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