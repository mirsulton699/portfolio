const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

let stars = [];
let meteors = [];


function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);



// ⭐ Yulduzlar yaratish

for(let i = 0; i < 250; i++){

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 2 + 0.5,

        opacity: Math.random(),

        speed: Math.random()*0.02 + 0.005,

        move: Math.random()*0.3+0.05

    });

}



// ☄️ Meteor yaratish

function createMeteor(){

    meteors.push({

        x: Math.random()*canvas.width + 200,

        y: Math.random()*-300,

        length: Math.random()*120+80,

        speed: Math.random()*8+5

    });

}


// Har 3 sekundda meteor

setInterval(createMeteor,3000);




// Animatsiya

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
        `rgba(255,255,255,${star.opacity})`;


        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI*2
        );


        ctx.fill();



        // miltillash

        star.opacity += star.speed;


        if(star.opacity >= 1 || star.opacity <=0.2){

            star.speed *= -1;

        }



        // sekin siljish

        star.y += star.move;



        if(star.y > canvas.height){

            star.y = 0;

        }



    });




    // ☄️ Meteorlar

    meteors.forEach((meteor,index)=>{


        ctx.beginPath();


        let gradient =
        ctx.createLinearGradient(
            meteor.x,
            meteor.y,
            meteor.x+meteor.length,
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
            meteor.x+meteor.length,
            meteor.y+meteor.length
        );


        ctx.stroke();



        meteor.x -= meteor.speed;

        meteor.y += meteor.speed;



        if(
            meteor.y > canvas.height ||
            meteor.x < -200
        ){

            meteors.splice(index,1);

        }


    });



    requestAnimationFrame(animate);


}


animate();




// 🔍 Qidiruv

function searchSite(){


let value =
document
.getElementById("search")
.value
.toLowerCase()
.trim();



if(
value.includes("free") ||
value.includes("fire") ||
value.includes("ff") ||
value.includes("garena") ||
value.includes("7357211531")
){

location.href="freefire.html";

}



else if(
value.includes("fc") ||
value.includes("mobile") ||
value.includes("futbol")
){

location.href="fcmobile.html";

}



else if(
value.includes("instagram") ||
value.includes("uzbrayzen")
){

window.open(
"https://instagram.com/uzbrayzen2010",
"_blank"
);

}



else if(value !== ""){


window.open(
"https://www.google.com/search?q="+value,
"_blank"
);


}
}
