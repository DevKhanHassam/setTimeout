let battery=document.getElementById("Battery");
battery.innerHTML='&#xf244';
let state=document.getElementById("state");
let myButton=document.getElementsByClassName("myButton");
let bb=myButton[0];
let stopButton=document.getElementById("stop");
let a,b,c,d,e=undefined,currentTimeoutValue=undefined;
let unplugged=undefined;
let stopFunction_timeout75,stopFunction_timeout50,stopFunction_timeout25,stopFunction_timeout0;

let pleasePlug,pleaseUnplug;






const charging=()=>{

bb.disabled=true;
bb.style.cursor='not-allowed';

stopButton.disabled=false;
stopButton.style.cursor="pointer";

 
switch(currentTimeoutValue)
{
    case 'a':   
    a=setTimeout(()=>{ state.textContent="Charging.25%";battery.innerHTML='&#xf243';battery.style.color='black'; currentTimeoutValue='a'},1000)
    b=setTimeout(()=>{battery.innerHTML='&#xf242';state.textContent="Charging..50%";currentTimeoutValue='b'},2000)
    c=setTimeout(()=>{battery.innerHTML='&#xf241';state.textContent="Charging...75%";currentTimeoutValue='c'},4000)
    d=setTimeout(()=>{battery.innerHTML='&#xf240';battery.style.color='green';state.textContent="100%.";currentTimeoutValue='d'},6000)
    pleaseUnplug=setTimeout(()=>alert('Please Save Electricity!'),9000)
    break;

    case 'b':   
    c=setTimeout(()=>{battery.innerHTML='&#xf241';state.textContent="Charging...75%";currentTimeoutValue='c'},2000)
    d=setTimeout(()=>{battery.innerHTML='&#xf240';battery.style.color='green';state.textContent="100%.";currentTimeoutValue='d'},4000)
    pleaseUnplug=setTimeout(()=>alert('Please Save Electricity!'),7000)
    break;

    case 'c':   
    d=setTimeout(()=>{battery.innerHTML='&#xf240';battery.style.color='green';state.textContent="100%.";currentTimeoutValue='d'},2000)
    pleaseUnplug=setTimeout(()=>alert('Please Save Electricity!'),5000)
    break;


    case "d":
        break;

    default:

        a=setTimeout(()=>{ state.textContent="Charging.25%";battery.innerHTML='&#xf243';battery.style.color='black'; currentTimeoutValue='a'},1000)
        b=setTimeout(()=>{battery.innerHTML='&#xf242';state.textContent="Charging..50%";currentTimeoutValue='b'},3000)
        c=setTimeout(()=>{battery.innerHTML='&#xf241';state.textContent="Charging...75%";currentTimeoutValue='c'},5000)
        d=setTimeout(()=>{battery.innerHTML='&#xf240';battery.style.color='green';state.textContent="100%.";currentTimeoutValue='d'},7000)
        pleaseUnplug=setTimeout(()=>alert('Please Save Electricity!'),10000)
}
clearTimeout(stopFunction_timeout75);
clearTimeout(stopFunction_timeout50);
clearTimeout(stopFunction_timeout25);
clearTimeout(stopFunction_timeout0);
clearTimeout(pleasePlug);
}



const stop=()=>{
bb.disabled=false;
bb.style.cursor='pointer';

stopButton.style.cursor='not-allowed';
stopButton.disabled=true;


unplugged_State = state.innerHTML;
unplugged_State=unplugged_State.replace("Charging","Unplugged")
state.innerHTML=unplugged_State;


clearTimeout(a);
clearTimeout(b);
clearTimeout(c);
clearTimeout(d);
clearTimeout(pleaseUnplug)


switch(currentTimeoutValue)
{
    case 'd':   
    stopFunction_timeout75=setTimeout(()=>{battery.innerHTML='&#xf241';state.textContent="Battery...75%";currentTimeoutValue='c';battery.style.color='black'},2000)
    stopFunction_timeout50=setTimeout(()=>{battery.innerHTML='&#xf242';state.textContent="Battery..50%";currentTimeoutValue='b'},4000)
    stopFunction_timeout25=setTimeout(()=>{battery.innerHTML='&#xf243';state.textContent="Battery..25%";currentTimeoutValue='a'},6000)
    stopFunction_timeout0=setTimeout(()=>{battery.innerHTML='&#xf244';state.textContent="Battery Low%";currentTimeoutValue='a';battery.style.color='rgb(204, 2, 2)'},8000)
    pleasePlug=setTimeout(()=>alert('Please Charge'),11000);
    break;

    case 'c':   
    stopFunction_timeout50=setTimeout(()=>{battery.innerHTML='&#xf242';state.textContent="Battery..50%";currentTimeoutValue='b';battery.style.color='black'},2000)
    stopFunction_timeout25=setTimeout(()=>{battery.innerHTML='&#xf243';state.textContent="Battery..25%";currentTimeoutValue='a'},4000)
    stopFunction_timeout0=setTimeout(()=>{battery.innerHTML='&#xf244';state.textContent="Battery Low%";currentTimeoutValue='a';battery.style.color='rgb(204, 2, 2)'},6000)
    pleasePlug=setTimeout(()=>alert('Please Charge'),9000);
    break;

    case 'b':   
    stopFunction_timeout25=setTimeout(()=>{battery.innerHTML='&#xf243';state.textContent="Battery..25%";currentTimeoutValue='a';battery.style.color='black'},2000)
    stopFunction_timeout0=setTimeout(()=>{battery.innerHTML='&#xf244';state.textContent="Battery Low%";currentTimeoutValue='a';battery.style.color='rgb(204, 2, 2)'},4000)
    pleasePlug=setTimeout(()=>alert('Please Charge'),7000);
    break;


    case "a":
        stopFunction_timeout0=setTimeout(()=>{battery.innerHTML='&#xf244';state.textContent="Battery Low%";currentTimeoutValue='a';battery.style.color='rgb(204, 2, 2)'},2000)
        pleasePlug=setTimeout(()=>alert('Please Charge'),5000);
        break;

    
}

}



bb.addEventListener("click",charging)
stopButton.addEventListener('click',stop)