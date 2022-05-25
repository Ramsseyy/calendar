const date = new Date();
console.log(date);
var month = date.getMonth();
console.log(month);
const yyyy = date.getFullYear();
console.log(yyyy);
const day = date.getDay();
console.log(day);

const name_Days=["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
const day_Week =[0,1,2,3,4,5,6];
var month_number =[0,1,2,3,4,5,6,7,8,9,10,11];
console.log(month_number);
const namesMonth=["January", "Febuary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
 const nameofmonth=document.querySelector(".monthname");

 for (var n=0; n<=11; n++){
 if(month_number[n]=== month)
 {
     nameofmonth.innerHTML = `<div>
     <h1>
     ${namesMonth[month]} ${yyyy} </h1>
     </div>`
 }
 }

 //display names of days in a week
 const nameofdays =document.querySelector('.calendar-weekDays');
 let nod="";
 for(var j=0; j<=6; j++)
 {
     nod+= `<div> ${name_Days[j]} </div>`
     console.log(nod);
     nameofdays.innerHTML = nod;
 }
 
 //To find year is leap year and set feb to 29 

 var febDays=0;
 var y = yyyy;
 
 if((y%4 === 0) && (y%100!==0)|| (y%400 === 0)){

    febDays = 29;
    console.log(febDays);
    console.log("Year : " + yyyy + " "+"is a leap year");
 }

 else{
     febDays = 28;
     console.log(febDays);
     console.log("Year : " + yyyy + " "+"is not a leap year");
 }

 // display Days of month
 const displayDays = document.querySelector(".calendar-monthDays");
 var days=" ";
 const dt=date.getDate();
    if((month===0) || (month===2) || (month===4) || (month===6) || (month===7) ||(month===9) ||(month===11))
    {
        for(var j=1; j<=3; j++){
            if (j=== dt){
                days+=`<div style='color:blue; font-weight:bold'> ${j} </div>`        
                displayDays.innerHTML=days; 
            }
            else{
                days+= `<div> ${j} </div>`
                displayDays.innerHTML=days;}}
    }

    else
    if((month===3) || (month===5) || (month===8) || (month===10))
    {
        for(var j=1; j<30;j++){
            if(j===dt){
                days+=`<div style='color:blue; font-weight:bold; '> ${j} </div>`
                displayDays.innerHTML = days;
            }
            else {
                days += `<div> ${j} </div>`

                displayDays.innerHTML=days;}}
    }

    else if (month===1){
        for(var j=1; j<=febDays; j++){
            if (j===dt){
                days+=`<div style='color:blue; font-weight:bold'> ${j} <div>`
                displayDays.innerHTML=days;
            }
            else{
                days+= `<div> ${j} </div>`

                displayDays.innerHTML=days;}}
    }
    else{
        "incorrect Year";
    }





    