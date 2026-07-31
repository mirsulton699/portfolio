// 🔑 FOOTBALL API KEY
const API_KEY = "b4c21563f064a2e3e86dcd59051e4844";



// 🌌 KOSMOS (FAKAT YULDUZLAR)

const canvas = document.getElementById("space");


if(canvas){

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let stars = [];


for(let i = 0; i < 250; i++){

stars.push({

x: Math.random()*canvas.width,

y: Math.random()*canvas.height,

size: Math.random()*2+0.5,

opacity: Math.random(),

speed: Math.random()*0.02+0.005

});


}



function animateSpace(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(star=>{


star.opacity += star.speed;



if(star.opacity > 1 || star.opacity < 0.2){

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



requestAnimationFrame(animateSpace);


}



animateSpace();


}






// ⚽ LIVE FOOTBALL API


async function loadFootball(){


let score =
document.getElementById("footballScore");


if(!score) return;



try{


let response = await fetch(

"https://v3.football.api-sports.io/fixtures?live=all",

{

headers:{

"x-apisports-key": API_KEY

}

}

);



let data = await response.json();



if(!data.response || data.response.length===0){


score.innerHTML =
"⚽ Hozir jonli o'yin yo'q";


return;


}



let result = "";



data.response.slice(0,10).forEach(match=>{


result += `

<p>

⚽ ${match.teams.home.name}

<b>

${match.goals.home}

-

${match.goals.away}

</b>

${match.teams.away.name}

<br>

⏱ ${match.fixture.status.elapsed || ""}'

</p>

<hr>

`;


});



score.innerHTML = result;



}


catch(error){


console.log(error);


score.innerHTML =
"❌ API xatosi";


}


}



loadFootball();






// 🔍 QIDIRUV


function searchSite(){


let text =
document.getElementById("search")
.value
.toLowerCase();



if(text.includes("free") || text.includes("fire")){


location.href="freefire.html";


}


else if(text.includes("fc") || text.includes("mobile")){


location.href="fcmobile.html";


}


else if(text.includes("achievement")){


location.href="achievements.html";


}


else if(text.includes("live") || text.includes("football")){


location.href="livefootball.html";


}


else{


alert("Topilmadi 🔍");


}


}






// 🤖 AI


function openAI(){


let box =
document.getElementById("aiBox");


if(!box) return;



if(box.style.display==="block"){


box.style.display="none";


}

else{


box.style.display="block";


}


}





function askAI(){


let input =
document.getElementById("aiInput");


let answer =
document.getElementById("aiAnswer");



if(!input || !answer) return;



let text =
input.value.toLowerCase();



if(text.includes("salom")){


answer.innerHTML =
"Salom 👋 Mr.Mirsulton AI";


}


else if(text.includes("football")){


answer.innerHTML =
"⚽ LIVE Football ishlamoqda";


}


else if(text.includes("free")){


answer.innerHTML =
"🔥 Free Fire bo'limi tayyor";


}


else{


answer.innerHTML =
"🤖 Hozircha javob topilmadi";


}


}






// 📱 EKRAN MOSLASHUVI


window.addEventListener("resize",()=>{


if(canvas){


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


}


});
