// Sayt yuklanganda animatsiya
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    }, 200);

});


// Kartalarga sichqoncha effekti
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let x = e.offsetX;
        let y = e.offsetY;

        let rotateX = (y - card.offsetHeight / 2) / 15;
        let rotateY = (x - card.offsetWidth / 2) / 15;

        card.style.transform =
        `scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});


// Konsol xabari
console.log("UZBRAYZEN Gaming sayt ishga tushdi 🚀");
