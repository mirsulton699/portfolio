// 🔑 API KEY
const API_KEY = "b4c21563f064a2e3e86dcd59051e4844";


// 🌌 KOSMOS

const canvas = document.getElementById("space");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;


let stars=[];


for(let i=0;i<250;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2+0.5,
opacity:Math.random(),
speed:0.01

});

}



let meteors=[];


setInterval(()=>{

meteors.push({

x:canvas.width,
y:Math.random()*300,
speed:-8

});

},3000);




function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);



stars.forEach(s=>{


s.opacity+=s.speed;


if(s.opacity>1 || s.opacity<0.2){

s.speed*=-1;

}


ctx.beginPath();

ctx.fillStyle=`rgba(255,255,255,${s.opacity})`;

ctx.arc(
s.x,
s.y,
s.size,
0,
Math.PI*2
);

ctx.fill();


});




meteors.forEach((m,i)=>{


ctx.beginPath();

ctx.strokeStyle="white";

ctx.moveTo(m.x,m.y);

ctx.lineTo(
m.x+120,
m.y-120
);

ctx.stroke();


m.x+=m.speed;



if(m.x< -200){

meteors.splice(i,1);

}


});



requestAnimationFrame(animate);

}


animate();


}




// ⚽ HAQIQIY FUTBOL NATIJASI


async function loadFootball(){


let box=document.getElementById("footballScore");


if(!box)return;



try{


let response=await fetch(

"https://v3.football.api-sports.io/fixtures?live=all",

{

headers:{

"x-apisports-key":API_KEY

}

}

);



let data=await response.json();



if(data.response.length===0){


box.innerHTML="⚽ Hozir jonli o'yin yo'q";


return;

}



let result="";



data.response.forEach(game=>{


result+=`

<p>

⚽ ${game.teams.home.name}

<b>

${game.goals.home}

-

${game.goals.away}

</b>

${game.teams.away.name}

<br>

⏱ ${game.fixture.status.long}

</p>

<hr>

`;


});



box.innerHTML=result;


}


catch(error){


box.innerHTML="❌ API xatosi";


console.log(error);


}


}



loadFootball();





// 🔍 QIDIRUV

function searchSite(){


let text=document
.getElementById("search")
.value
.toLowerCase();



if(text.includes("live")||text.includes("news")){

location.href="news.html";

}

else if(text.includes("free")){

location.href="freefire.html";

}

else{

alert("Topilmadi 🔍");

}


}





// 🤖 AI

function openAI(){

let box=document.getElementById("aiBox");

if(box){

box.style.display=
box.style.display=="block"
?"none"
:"block";

}

}



function askAI(){


let input=document.getElementById("aiInput");

let answer=document.getElementById("aiAnswer");


if(!input||!answer)return;


answer.innerHTML=
"🤖 AI ishlayapti...";


}
