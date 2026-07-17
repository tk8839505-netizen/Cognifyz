let btn = document.querySelector("#my-button");
let body=document.querySelector("body");

let mode = "light";

btn.addEventListener("click",()=>{
    if(mode === "light"){
        mode="dark"
        btn.style.backgroundColor = "black";
        btn.style.color="white";

    }else{
        mode="light";
        btn.style.backgroundColor = "white";
        btn.style.color="black";

    }
   
});



function Greeting(){
    let hour = new Date().getHours();
    let message;
    if(hour >= 6 && hour < 12){
        message = "Good Morning!";
    }
    else if(hour >=12 && hour < 18){
       message= "Good Afternoon";
    }
    else if(hour >= 18 && hour < 21){
        message ="Good Evening";
    }
    else{
        message = "Good Night";
    }
    alert(message);


};




function addNumber(){

 let num1 = Number(document.getElementById("num1").value);
 let num2 = Number(document.getElementById("num2").value);

 if(isNaN(num1) || isNaN(num2)){
    alert("Enter both numbers");
    return;

 }
 let sum = num1 + num2;

 document.getElementById("result").innerHTML =  `sum of ${num1} and ${num2} are = ` + sum ;
   
}