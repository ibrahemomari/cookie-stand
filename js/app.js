// 'use strict';

// // decleartions of objects
// let Seattle,Tokyo,Dubai,Paris,Lima;
// // array that have the cookies per hour
// let CookiesPerHours;
// // variables related CPH fnction
// let dayTime , finalArray=[];

// // Seattle object
// Seattle={
//     name:'Seattle',
//     min:23 ,
//     max:65,
//     // ACPC=[],
//     average: function()
//     {

//          return Math.floor(Math.random() * (this.max - this.min) + this.min);

//     }



// };


// let sum=0,x=0;

// function CPH()
// {
//     for(let i=0;i<14;i++)
//     {
//         x=Seattle.average();
//         sum+=x;
//         if(i<=7)
//         {
//             dayTime=`${i+6}AM: `+x+' cookies';

//         }
//         else if (i>7)
//         {
//             dayTime=`${i+6}PM: `+x+' cookies';

//         }
//         console.log(dayTime);


//     }


//     console.log('Total:'+sum+' cookies');

// }


// CPH();




// Tokyo object
// Tokyo={
//     name:'Tokyo',
//     min: ,
//     max: ,
//     average:

// };
// // Dubai object
// Dubai={
//     name:'Dubai' ,
//     min: ,
//     max: ,
//     average:

// };
// // Paris object
// Paris={
//     name:'Paris' ,
//     min: ,
//     max: ,
//     average:

// };
// // Lima object
// Lima={
//     name:'Lima',
//     min: ,
//     max: ,
//     average:

// };

// array of work hours 
let Hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let allStoreHours=[];
let sumation=[];

// constructor for the Salmon Cookies
function SalmonCookies(location, min, max, avg) {
    let sales=[] , sum=0;
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.sales=sales;
    this.sum=sum;
    

}

// Random number prototype for Customers

SalmonCookies.prototype.customersPerHour = function () {
    return Math.floor((Math.random() * ((this.max) - (this.min)) + this.min) * this.avg);
}


// process prototype

SalmonCookies.prototype.process = function () {
    let NumOfCookies;
    for (let i = 0; i < Hours.length; i++) {
        NumOfCookies=Math.floor((Math.random() * ((this.max) - (this.min)) + this.min) * this.avg);
        // console.log(NumOfCookies);
        this.sum+=NumOfCookies;
        this.sales.push(NumOfCookies);
        allStoreHours[i]=this.sales[i];
        
    }
   
        
  
   
    // console.log(this.sum);
    this.sales.push(this.sum);
   
    // console.log(this.sales);
    console.log(this.sales);
    if(sumation.length==0)
    {
        sumation=this.sales;
        console.log(sumation);
    }
    else
    {
        for (let i = 0; i < this.sales.length; i++) {
      
            sumation[i]=sumation[i]+this.sales[i];
            
        }
    }
 
    console.log(sumation);
}



// total for evrey hour

function defultRender ()
{
    let th=[];
    let parent=document.getElementById('cookies');
    let table=document.createElement('table');
    parent.appendChild(table);
    table.setAttribute('id','salesTable');
    //  row 1 ------------------------------------
    let tr1=document.createElement('tr');
    table.appendChild(tr1);
    let thFirst1=document.createElement('th');
    tr1.appendChild(thFirst1);
    thFirst1.textContent="LOCATION";
     for(let i=0;i<Hours.length;i++)
     {
         th[i]=document.createElement('th');
         tr1.appendChild(th[i]);
         th[i].textContent=Hours[i]
        
     }
     let thLast1=document.createElement('th');
     tr1.appendChild(thLast1);
     thLast1.textContent="Daily Location Total";
    //  console.log(parent);
}

defultRender();
// render prototype

SalmonCookies.prototype.render = function () {
    let td=[];
    
    let parent=document.getElementById('salesTable');
    let tr=document.createElement('tr');

    let tdFirst=document.createElement('td');
    tr.appendChild(tdFirst);
    tdFirst.textContent=this.location;

    parent.appendChild(tr);
    for(let i=0; i<this.sales.length;i++)
    {
        td[i]=document.createElement('td');
        tr.appendChild(td[i]);
        td[i].textContent=this.sales[i];
        
    }

    
    
    
    

}


function lastRow()
{
    let parent=document.getElementById('salesTable');
    let tr=document.createElement('tr');
    let td=[];
    parent.appendChild(tr);
    let tdFirst=document.createElement('td');
    tr.appendChild(tdFirst);
    tdFirst.textContent='Total';
    for (let i = 0; i < sumation.length+1; i++) {
        td[i]=document.createElement('td');
        tr.appendChild(td[i]);
        td[i].textContent=sumation[i];
        
    }
    console.log(parent);
}

function Total(array)
{
 
    
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        ssss[i] =ssss[i]+ array[i];
        
    }

console.log(ssss);
    
}


// creat an objects
let Seattle = new SalmonCookies('Seattle', 23, 65, 6.3);
console.log(Seattle.process());
console.log(Seattle.render());

let Tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
console.log(Tokyo.process());
console.log(Tokyo.render());

let Dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
console.log(Dubai.process());
console.log(Dubai.render());

let Paris = new SalmonCookies('Paris', 20, 38, 2.3);
console.log(Paris.process());
console.log(Paris.render());

let Lima = new SalmonCookies('Lima', 2, 16, 4.6);
console.log(Lima.process());
console.log(Lima.render());







// call function to display the total row -----------------------------------
lastRow();