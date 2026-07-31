const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let stars = [];
let meteors = [];



// ⭐ Yulduzlar yaratish

for(let i = 0; i < 250; i++){

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 2 + 0.5,

        alpha: Math.random(),

        twinkle: Math.random() * 0.02 + 0.005

    });

}




// ☄️ Meteor yaratish

function createMeteor(){

    meteors.push({

        x: Math.random() * canvas.width + 300,

        y: Math.random() * 200 - 100,

        speed: Math.random()*5+5,

        length: Math.random()*100+80

    });

}



setInterval(createMeteor,4000);





// 🌌 Animatsiya

function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



// ⭐ Yulduzlar

stars.forEach(star=>{


ctx.beginPath();


ctx.fillStyle =
`rgba(255,255,255,${star.alpha})`;



ctx.arc(

star.x,

star.y,

star.size,

0,

Math.PI*2

);



ctx.fill();



star.alpha += star.twinkle;



if(star.alpha >= 1 || star.alpha <=0.3){

    star.twinkle *= -1;

}



});






// ☄️ Meteorlar

meteors.forEach((meteor,index)=>{


ctx.beginPath();


let gradient =
ctx.createLinearGradient(

meteor.x,

meteor.y,

meteor.x-meteor.length,

meteor.y+meteor.length

);



gradient.addColorStop(0,"white");

gradient.addColorStop(1,"transparent");



ctx.strokeStyle = gradient;

ctx.lineWidth = 3;



ctx.moveTo(

meteor.x,

meteor.y

);



ctx.lineTo(

meteor.x-meteor.length,

meteor.y+meteor.length

);



ctx.stroke();



meteor.x -= meteor.speed;

meteor.y += meteor.speed;



if(

meteor.x < -200 ||

meteor.y > canvas.height

){

meteors.splice(index,1);

}



});



requestAnimationFrame(animate);


}



animate();






// Oyna o'lchami o'zgarsa

window.addEventListener("resize",()=>{


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


});







// 🔍 Qidiruv tizimi


function searchSite(){


let text = document
.getElementById("search")
.value
.toLowerCase()
.trim();



if(

text.includes("free") ||

text.includes("fire") ||

text.includes("ff") ||

text.includes("7357211531")

){

window.location.href="freefire.html";


}



else if(

text.includes("fc") ||

text.includes("mobile") ||

text.includes("futbol")

){

window.location.href="fcmobile.html";


}



else if(

text.includes("instagram") ||

text.includes("uzbrayzen")

){

window.open(

"https://instagram.com/uzbrayzen2010",

"_blank"

);


}



else if(

text.includes("about") ||

text.includes("men")

){

window.location.href="about.html";


}



else if(

text.includes("gallery") ||

text.includes("rasm")

){

window.location.href="gallery.html";


}



else if(text !== ""){


window.open(

"https://www.google.com/search?q="+text,

"_blank"

);


}
}
