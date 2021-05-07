
'use strict';

// array of Hours 
let Hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// Calculate the Total of Totals
let TotalOfTotals=0;

// Calculate the Total of single hours for all locaton and the sum of them
let TotalOfSingleHourInAllLocation=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];



// array of all locations
let AllLocations=[];

// for table 
let parent=document.getElementById('cookies');
let table=document.createElement('table');


function SalmonCookies(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customerPerHours = [];
    this.TotalForSingleHour=0;
    this.RenderingFormat=[];
    AllLocations.push(this);
}


// prototype to claculate customer per hours

SalmonCookies.prototype.ClacCusPerHour = function () {

    let RandomNumber;

    for (let i = 0; i < Hours.length; i++) {
        RandomNumber = Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avg);
        this.customerPerHours[i] = RandomNumber;
        this.TotalForSingleHour+=this.customerPerHours[i];
       

    }
  
    
    for (let i = 0; i < Hours.length+2; i++) {
       
        if(i==0)
        {
            this.RenderingFormat.push(this.name);
        }
        else if (i==15)
        {
            this.RenderingFormat.push(this.TotalForSingleHour)
        }
        else
        {
            this.RenderingFormat.push(this.customerPerHours[0+1]);
        }
    }
  
    AddArray(this.customerPerHours)
   
    

}

function CreatHeaderOfTable()
{
    
    table.setAttribute('id','tableInfo');
    parent.appendChild(table);
    let tr=document.createElement('tr');
    table.appendChild(tr);
    
    for (let i = 0; i < Hours.length+2; i++) {
        let th=document.createElement('th');
        tr.appendChild(th);
        if(i==0)
        {
            th.textContent='Location';
        }
        else if(i==15)
        {
            th.textContent='Daily Location total';
        }
        else
        {
            th.textContent=Hours[i-1];
        }
        
        
    }


}
CreatHeaderOfTable();

SalmonCookies.prototype.render=function()
{
    let tr=document.createElement('tr');
    table.appendChild(tr);
    for (let i = 0; i < this.RenderingFormat.length; i++) {
        let td=document.createElement('td');
        tr.appendChild(td);
        td.textContent=this.RenderingFormat[i];
        
    }
    
}
function lastRowInTable()
{
    let tr=document.createElement('tr');
    tr.setAttribute('id','LastRow');
    table.appendChild(tr);
    
    for (let i = 0; i < Hours.length+2; i++) {
        let td=document.createElement('td');
        tr.appendChild(td);
        if(i==0)
        {
            td.textContent='Totals'
        }
        else if(i==15)
        {
            td.textContent=TotalSumation();
        }
        else
        {
            td.textContent=TotalOfSingleHourInAllLocation[i-1];
        }
        
    }
}
function AddArray(array) {
    for (let i = 0; i < array.length; i++) {
        TotalOfSingleHourInAllLocation[i]+=array[i];
        
    }
 
}

function TotalSumation()
{
    let SumOfSingleHourInAllLocation=0;
    for (let i = 0; i < TotalOfSingleHourInAllLocation.length; i++) {
        SumOfSingleHourInAllLocation+=TotalOfSingleHourInAllLocation[i];
        
    }
    return SumOfSingleHourInAllLocation;
}

let Seattle,Tokyo,Dubai,Paris,Lima;
Seattle=new SalmonCookies('Seattle',23,65,6.3);
Tokyo=new SalmonCookies('Tokyo',3,24,1.2);
Dubai=new SalmonCookies('Dubai',11,38,3.7);
Paris=new SalmonCookies('Paris',20,38,2.3);
Lima=new SalmonCookies('Lima',2,16,4.6);

for (let i = 0; i < AllLocations.length; i++) {
    
    AllLocations[i].ClacCusPerHour();
    AllLocations[i].render();
    
}

lastRowInTable();
let form=document.getElementById('AddStore');

form.addEventListener('submit',addStore);


function addStore(event)
{
    event.preventDefault();
    let name =event.target.location.value;
    let min =Number(event.target.minCust.value);
    let max =Number(event.target.maxCust.value);
    let avg =Number(event.target.cookiesPercustomer.value);
   

    let LastRow=document.getElementById('LastRow');
    LastRow.remove();

    let NewStore= new SalmonCookies(name,min,max,avg);

    NewStore.ClacCusPerHour();
    NewStore.render();
    lastRowInTable();
    
}



