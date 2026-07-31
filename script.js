// 🌌 CANVAS KOSMOS

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// ⭐ Yulduzlar

let stars = [];


for(let i = 0; i < 250; i++){

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random()*2+0.5,

        opacity: Math.random(),

        speed: Math.random()*0.02+0.005

    });

}




// ☄️ Meteorlar

let meteors = [];


function createMeteor(){

    meteors.push({

        x: canvas.width + 100,

        y: Math.random()*300,

        speedX:-7,

        speedY:7,

        size:3,

        length:120

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



// ⭐ chizish


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





// ☄️ meteor


meteors.forEach((m,index)=>{


    let tailX = m.x - m.speedX*15;

    let tailY = m.y - m.speedY*15;



    let gradient =
    ctx.createLinearGradient(

        m.x,

        m.y,

        tailX,

        tailY

    );



    gradient.addColorStop(0,"white");

    gradient.addColorStop(1,"transparent");



    ctx.beginPath();


    ctx.strokeStyle = gradient;

    ctx.lineWidth = m.size;


    ctx.moveTo(m.x,m.y);

    ctx.lineTo(tailX,tailY);


    ctx.stroke();



    m.x += m.speedX;

    m.y += m.speedY;




    if(m.x < -200 || m.y > canvas.height+200){

        meteors.splice(index,1);

    }


});



requestAnimationFrame(animate);


}


animate();







// 🔍 QIDIRUV


function searchSite(){


let text = document

.getElementById("search")

.value

.toLowerCase();




if(text.includes("free") || text.includes("fire")){


window.location="freefire.html";


}


else if(text.includes("fc") || text.includes("mobile")){


window.location="fcmobile.html";


}


else if(text.includes("achievement")){


window.location="achievements.html";


}


else{


alert("Topilmadi 🔍");


}


}








// 🤖 AI


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


let text=document

.getElementById("aiInput")

.value

.toLowerCase();



let answer="";



if(text.includes("salom")){


answer="Salom 👋 Mr.Mirsulton AI ishlayapti";


}


else if(text.includes("kim")){


answer="🚀 Sayt egasi: Mr.Mirsulton";


}


else if(text.includes("free")){


answer="🔥 Free Fire bo'limi tayyor";


}


else if(text.includes("fc")){


answer="⚽ FC Mobile bo'limi tayyor";


}


else{


answer="Hozircha bu savolga javob topilmadi 🤖";


}



document.getElementById("aiAnswer").innerHTML=answer;


}






// 📱 Ekran moslashuvi

window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});
