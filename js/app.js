'use strict';

// decleartions of objects
let Seattle,Tokyo,Dubai,Paris,Lima;
// array that have the cookies per hour
let CookiesPerHours;
// variables related CPH fnction
let dayTime , finalArray=[];

// Seattle object
Seattle={
    name:'Seattle',
    min:23 ,
    max:65,
    // ACPC=[],
    average: function()
    {
         
         return Math.floor(Math.random() * (this.max - this.min) + this.min);
        
    }
    


};


let sum=0,x=0;

function CPH()
{
    for(let i=0;i<14;i++)
    {
        x=Seattle.average();
        sum+=x;
        if(i<=7)
        {
            dayTime=`${i+6}AM: `+x+' cookies';
            
        }
        else if (i>7)
        {
            dayTime=`${i+6}PM: `+x+' cookies';
            
        }
        console.log(dayTime);
        

    }


    console.log('Total:'+sum+' cookies');

}


CPH();




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

