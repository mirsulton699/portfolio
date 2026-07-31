// =========================
// 🌌 KOSMIK FON
// =========================


const canvas = document.getElementById("space");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



let stars = [];

let meteors = [];




// ⭐ Yulduzlar

for(let i=0;i<300;i++){


stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2+0.5,

opacity:Math.random(),

speed:Math.random()*0.02+0.005


});


}





// ☄️ Meteor yaratish


function createMeteor(){


meteors.push({


x:Math.random()*canvas.width+200,

y:Math.random()*200,


speedX:-6,

speedY:6,


length:120


});


}



setInterval(createMeteor,3500);






// Chizish


function animate(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);





// ⭐ yulduzlar


stars.forEach(star=>{


star.opacity += star.speed;



if(star.opacity>=1 || star.opacity<=0.2){

star.speed*=-1;

}



ctx.beginPath();


ctx.fillStyle=

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






// ☄️ meteor


meteors.forEach((m,index)=>{



let tailX = m.x - m.speedX*15;

let tailY = m.y - m.speedY*15;



let gradient = ctx.createLinearGradient(

m.x,

m.y,

tailX,

tailY

);



gradient.addColorStop(0,"white");

gradient.addColorStop(1,"transparent");



ctx.beginPath();


ctx.strokeStyle=gradient;

ctx.lineWidth=3;



ctx.moveTo(

m.x,

m.y

);


ctx.lineTo(

tailX,

tailY

);


ctx.stroke();



m.x += m.speedX;

m.y += m.speedY;




if(

m.x<-200 ||

m.y>canvas.height+200

){

meteors.splice(index,1);

}


});





requestAnimationFrame(animate);


}


animate();








// =========================
// 🔍 QIDIRUV
// =========================


function searchSite(){



let text=document

.getElementById("search")

.value

.toLowerCase();




if(text.includes("free") || text.includes("fire")){


location.href="freefire.html";


}



else if(text.includes("fc") || text.includes("mobile")){


location.href="fcmobile.html";


}



else if(text.includes("about")){


location.href="about.html";


}



else if(text.includes("gallery")){


location.href="gallery.html";


}



else if(text.includes("instagram")){


window.open(

"https://instagram.com/uzbrayzen2010",

"_blank"

);


}



else{


alert("Topilmadi 🔍");


}


}








// =========================
// 🤖 AI YORDAMCHI
// =========================



function openAI(){


let box=document.getElementById("aiBox");


if(box.style.display==="block"){


box.style.display="none";


}

else{


box.style.display="block";


}


}





function askAI(){



let input=document

.getElementById("aiInput")

.value

.toLowerCase();



let answer="";





if(input.includes("free") || input.includes("fire")){


answer="🔥 Free Fire ID: 7357211531";


}



else if(input.includes("fc")){


answer="⚽ FC Mobile - Ultimate Team";


}



else if(input.includes("ism") || input.includes("kim")){


answer="🚀 Sayt egasi: Mr.Mirsulton";


}



else if(input.includes("salom")){


answer="Salom! 🤖 Men Mr.Mirsulton AI";


}



else{


answer="Hozircha bu savolni bilmayman 😎";


}




document.getElementById("aiAnswer").innerHTML=answer;



}








// 📱 Ekran moslashuvi


window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});
