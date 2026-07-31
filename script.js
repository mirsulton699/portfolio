// ===============================
// 🌌 MR.MIRSULTON SPACE SYSTEM
// ===============================


const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// ===============================
// ⭐ YULDUZLAR
// ===============================


let stars = [];


for(let i = 0; i < 300; i++){

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        radius: Math.random()*2+0.5,

        opacity: Math.random(),

        speed: Math.random()*0.02+0.005

    });

}




// ===============================
// ☄️ METEORLAR
// ===============================


let meteors = [];



function createMeteor(){


    meteors.push({

        x: Math.random()*canvas.width+200,

        y: Math.random()*200-100,


        speedX: -(Math.random()*6+4),

        speedY: Math.random()*6+4,


        size: Math.random()*2+2,


        tail: Math.random()*120+80

    });


}



setInterval(createMeteor,3500);





// ===============================
// ANIMATSIYA
// ===============================


function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);




// ⭐ STAR DRAW


stars.forEach(star=>{


    star.opacity += star.speed;



    if(star.opacity >=1 || star.opacity <=0.2){

        star.speed *= -1;

    }



    ctx.beginPath();


    ctx.fillStyle =
    `rgba(255,255,255,${star.opacity})`;


    ctx.arc(

        star.x,

        star.y,

        star.radius,

        0,

        Math.PI*2

    );


    ctx.fill();



});







// ☄️ METEOR DRAW


meteors.forEach((meteor,index)=>{


    let tailX =
    meteor.x - meteor.speedX * 15;


    let tailY =
    meteor.y - meteor.speedY * 15;



    let gradient =
    ctx.createLinearGradient(

        meteor.x,

        meteor.y,

        tailX,

        tailY

    );



    gradient.addColorStop(0,"white");

    gradient.addColorStop(1,"transparent");



    ctx.beginPath();


    ctx.strokeStyle = gradient;

    ctx.lineWidth = meteor.size;



    ctx.moveTo(

        meteor.x,

        meteor.y

    );


    ctx.lineTo(

        tailX,

        tailY

    );


    ctx.stroke();





    // harakat

    meteor.x += meteor.speedX;

    meteor.y += meteor.speedY;




    if(

    meteor.x < -200 ||

    meteor.y > canvas.height+200

    ){

        meteors.splice(index,1);

    }



});





requestAnimationFrame(animate);


}



animate();







// ===============================
// 🔍 QIDIRUV
// ===============================



function searchSite(){



let text = document
.getElementById("search")
.value
.toLowerCase();



if(

text.includes("free") ||

text.includes("fire") ||

text.includes("7357211531")

){

location.href="freefire.html";

}



else if(

text.includes("fc") ||

text.includes("mobile")

){

location.href="fcmobile.html";

}



else if(

text.includes("about")

){

location.href="about.html";

}



else if(

text.includes("gallery")

){

location.href="gallery.html";

}



else if(

text.includes("instagram")

){

window.open(
"https://instagram.com/uzbrayzen2010",
"_blank"
);

}



else{

alert("Topilmadi 🔍");

}



}







// ===============================
// 📱 EKRAN MOSLASHUVI
// ===============================


window.addEventListener("resize",()=>{


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


});
