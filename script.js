const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

let stars = [];
let meteors = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Yulduz yaratish

for(let i = 0; i < 200; i++){

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 2 + 1,

        speed: Math.random() * 0.2 + 0.05,

        alpha: Math.random()

    });

}



// Meteor yaratish

function createMeteor(){

    meteors.push({

        x: Math.random()*canvas.width,

        y: -50,

        length: Math.random()*80+50,

        speed: Math.random()*6+5

    });

}


setInterval(createMeteor,5000);



// Animatsiya

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    // yulduzlar

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



        star.alpha += 0.01 * star.speed;


        if(star.alpha > 1 || star.alpha < 0.2){

            star.speed *= -1;

        }


    });



    // meteorlar

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



        if(meteor.y > canvas.height){

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




// Qidiruv

function searchSite(){


let value =
document.getElementById("search")
.value
.toLowerCase()
.trim();



if(value.includes("free") || value.includes("ff") || value.includes("7357211531")){


window.location.href="freefire.html";


}


else if(value.includes("fc") || value.includes("mobile")){


window.location.href="fcmobile.html";


}


else if(value.includes("instagram") || value.includes("uzbrayzen")){


window.open(
"https://instagram.com/uzbrayzen2010",
"_blank"
);


}


else if(value.includes("about")){


window.location.href="about.html";


}


else if(value !== ""){


window.open(
"https://www.google.com/search?q="+value,
"_blank"
);


}
}
