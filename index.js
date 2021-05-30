var p1=prompt("Enter the first Player name:");
var p2=prompt("Enter the Second Player name:");
document.querySelector("#pl1").innerText=p1;
document.querySelector("#pl2").innerText=p2;
var score1=0,score2=0,listnerCount=0;
document.querySelector(".button").addEventListener("click",function (){
    var random1=Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[0].setAttribute("src","images/dice"+random1+".png");
    var random2=Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[1].setAttribute("src","images/dice"+random2+".png");
    if(random1>random2){
        score1++;
        document.querySelector("#score1").innerHTML=score1;
    }
    else if(random1<random2){
        score2++;
        document.querySelector("#score2").innerHTML=score2;
    }else{
        listnerCount--;
    }
    var audio = new Audio("sound.mp3");
    audio.play();  
    listnerCount++;
    if(listnerCount==5){
        if(score1>score2){
            document.querySelector("h1").innerHTML="🚩"+p1+" Wins";
        }else{
            document.querySelector("h1").innerHTML=p2+" Wins 🚩";
        }
        setTimeout(() => {
            window.location.reload(); 
        }, 2000);
    }
});

    