for(var i = 0; i < 100; i++){
    randamNum = Math.floor(Math.random() * 10)+ 1
    console.log(randamNum);
}

var number = +prompt("Gess number is a 1 to 10?");

if(number < randamNum){
    alert("low numer" + randamNum);
}else if(number > randamNum){
    alert("high number" + randamNum);
}else{
    alert("Congratulation" + randamNum)
}

var ok = confirm("Do you want to play again?")

if(ok){
    window.location.reload();
} 
