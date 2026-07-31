// ⚽ API JOYI
const API_KEY = "BU_YERGA_API_KALIT";


// 🌌 KOSMOS ANIMATSIYA

const canvas = document.getElementById("space");


if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let stars = [];

for(let i=0;i<250;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2+0.5,

opacity:Math.random(),

speed:Math.random()*0.02+0.005

});

}



let meteors = [];


function createMeteor(){

meteors.push({

x:canvas.width,

y:Math.random()*300,

speedX:-8,

speedY:8

});

}


setInterval(createMeteor,3000);



function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(star=>{


star.opacity += star.speed;


if(star.opacity>1 || star.opacity<0.2){

star.speed *= -1;

}



ctx.beginPath();

ctx.fillStyle =
`rgba(255,255,255,${star.opacity})`;


ctx.arc(
star.x,
star.y,
star.size,
0,
Math.PI*2
);


ctx.fill();


});




meteors.forEach((m,index)=>{


ctx.beginPath();

ctx.strokeStyle="white";

ctx.lineWidth=3;


ctx.moveTo(m.x,m.y);

ctx.lineTo(
m.x+120,
m.y-120
);


ctx.stroke();



m.x += m.speedX;

m.y += m.speedY;



if(m.x < -200){

meteors.splice(index,1);

}


});



requestAnimationFrame(animate);


}


animate();


}






// ⚽ LIVE FOOTBALL

function loadFootball(){


let score = document.getElementById("footballScore");


if(!score) return;



if(API_KEY === "BU_YERGA_API_KALIT"){


score.innerHTML =
"⚽ API kalit kutilmoqda...";


}

else{


score.innerHTML =
"⚽ Natijalar yuklanmoqda...";


}


}


loadFootball();






// 🔍 QIDIRUV

function searchSite(){


let text =
document.getElementById("search").value.toLowerCase();



if(text.includes("free")){

location.href="freefire.html";

}

else if(text.includes("fc")){

location.href="fcmobile.html";

}

else if(text.includes("live") || text.includes("news")){

location.href="news.html";

}

else{

alert("Topilmadi 🔍");

}


}






// 🤖 AI

function openAI(){


let box=document.getElementById("aiBox");


if(!box) return;


if(box.style.display==="block"){

box.style.display="none";

}

else{

box.style.display="block";

}


}





function askAI(){


let input=document.getElementById("aiInput");

let answer=document.getElementById("aiAnswer");


if(!input || !answer) return;


let text=input.value.toLowerCase();



if(text.includes("salom")){

answer.innerHTML="Salom 👋 Mr.Mirsulton AI ishlayapti 🚀";

}

else if(text.includes("futbol")){

answer.innerHTML="⚽ LIVE Football tizimi tayyorlanmoqda";

}

else if(text.includes("free")){

answer.innerHTML="🔥 Free Fire yangiliklari tayyorlanmoqda";

}

else{

answer.innerHTML="Javob topilmadi 🤖";

}


}






// 📱 OYNA O'ZGARISHI

window.addEventListener("resize",()=>{


if(canvas){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}


});
