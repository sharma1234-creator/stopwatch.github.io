var ms=0;
var sec=0;
var min=0;
var hrs=0;
//screen
var timer;
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var stop = document.getElementById("reset");


//FOR START
const getTimer = (hrs,min,sec) =>{
   var res = "";
   if(hrs<10){
      res += "0"+hrs+":";
   }
   else{
      res +=hrs+":";
   }
   if(min<10){
      res += "0"+min+":";
   }
   else{
      res +=min+":";
   }
   if(sec<10){
      res += "0"+sec;
   }
   else{
      res +=sec;
   }
   return res;
}

const run = () =>{
   document.getElementById("time").innerHTML = getTimer(hrs,min,sec);
   ms += 100;
   if(ms == 1000){
      ms = 0;
      sec++;
   }
   if(sec == 60){
      sec=0;
      min++;
   }
   if(min == 60){
      min= 0;
      hrs++;
   }
}

const startTimer = () =>{
    start.disabled=true;
    pause.disabled=false;
    stop.disabled=false;
    if(!timer){
       timer= setInterval(run , 100);
    }
}
start.addEventListener("click",startTimer);


//for PAUSE
var count =0;
const pauseTimer = () =>{
  count++;
  if(count%2 == 1){
     pause.innerHTML = "continue";
     clearInterval(timer);
     timer = false;
     
  }
  else{
     pause.innerHTML = "pause";
     startTimer();
  }
}
pause.addEventListener("click",pauseTimer);


//FOR STOP
const stopTimer =()=>{
   stop.disabled = true;
   pause.disabled = true;
   start.disabled = false;
   pause.innerHTML = "pause";
   hrs = 0;
   min = 0;
   sec = 0;
   ms = 0;
   document.getElementById("time").innerHTML = "00:00:00";
   clearInterval(timer);
   timer = false;
}
stop.addEventListener("click",stopTimer);