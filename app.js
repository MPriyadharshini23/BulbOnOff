var bulb= document.getElementById("bulb");
var button=document.getElementById("toggle-btn");
var statusText=document.getElementById("status");
var text=document.getElementById("text");

function toggleButton(){
    var isOn =bulb.src.includes("realistic-lit-light-bulb-isolated_1284-41774.jpg");
    bulb.src=isOn ? "https://img.freepik.com/free-vector/realistic-light-bulb-isolated_1284-41741.jpg"
    :"https://img.freepik.com/free-vector/realistic-lit-light-bulb-isolated_1284-41774.jpg"; 
    button.textContent=isOn?"ON":"OFF";
    statusText.textContent=isOn?"The bulb is OFF":"The bulb is ON";
    document.body.style.backgroundColor=isOn?"#f4f4f4":"#222";
    statusText.style.color=isOn?"black":"yellow";
    text.style.color=isOn?"black":"white";
}   