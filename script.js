const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// =====================
// ⭐ YULDUZLAR
// =====================

let stars = [];


for(let i = 0; i < 250; i++){

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 2 + 0.5,

        opacity: Math.random(),

        fade: Math.random()*0.02+0.005

    });

}




// =====================
// ☄️ METEORLAR
// =====================

let meteors = [];


function createMeteor(){

    meteors.push({

        x: Math.random()*canvas.width + 200,

        y: Math.random()*300 - 100,


        // harakat
        speedX:-6,

        speedY:6,


        size:3,

        length:120

    });

}



setInterval(createMeteor,3000);





// =====================
// 🌌 CHIZISH
// =====================


function draw(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);



// ⭐ yulduzlar

stars.forEach(star=>{


    star.opacity += star.fade;


    if(star.opacity>=1 || star.opacity<=0.2){

        star.fade *= -1;

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




// ☄️ meteor


meteors.forEach((m,index)=>{


    // dum orqada qoladi

    let tailX = m.x - m.speedX * 15;

    let tailY = m.y - m.speedY * 15;




    let gradient = ctx.createLinearGradient(

        m.x,

        m.y,

        tailX,

        tailY

    );



    gradient.addColorStop(0,"white");

    gradient.addColorStop(1,"transparent");




    ctx.beginPath();


    ctx.strokeStyle = gradient;

    ctx.lineWidth=m.size;


    ctx.moveTo(

        m.x,

        m.y

    );


    ctx.lineTo(

        tailX,

        tailY

    );


    ctx.stroke();




    // meteor harakati


    m.x += m.speedX;

    m.y += m.speedY;



    if(

    m.x < -200 ||

    m.y > canvas.height+200

    ){

        meteors.splice(index,1);

    }



});



requestAnimationFrame(draw);


}



draw();




// =====================
// 🔍 QIDIRUV
// =====================


function searchSite(){


let text =
document
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




// ekran moslashuvi

window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});
