const btnMenu = document.getElementById("menu-btn"),
      btnClose = document.getElementById("menu-close");

btnMenu.addEventListener("click",()=>{
    document.querySelector("nav ul").classList.add("active");
});
btnClose.addEventListener("click",()=>{
    document.querySelector("nav ul").classList.remove("active");
});


// JavaScript to add/remove the "scroll" class to the navigation bar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 100) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

// Client Testimenials

const clients = {
    client_1:{
        comment:`DeliveryHub has become an integral part of our family dinners. It's convenient, and we love exploring new restaurants through the platform. The food quality is consistently great.`,
        clientName : `Lisa Johnson`,
        clientImg: `wo_1`,
        clientProfession:`Teacher`
    },
    client_2:{
        comment: `I've tried several food delivery apps, but DeliveryHub stands out with its wide variety of restaurant options and speedy deliveries. The app is user-friendly, and their customer support is excellent.`,
        clientName : `John Smith`,
        clientImg: `ma_1`,
        clientProfession:`Software Developer`
    },
    client_3:{
        comment: `DeliveryHub has made my life so much easier! As a busy professional, I rely on their efficient service to get delicious meals delivered to my doorstep. The food is always hot and fresh. Thank you, DeliveryHub!`,
        clientName : `Sarah Anderson`,
        clientImg: `wo_2`,
        clientProfession:`Marketing Manager`
    },
    client_4:{
        comment: `I've recommended DeliveryHub to all my friends. The app is intuitive, the delivery is fast, and I've never had any issues with my orders. It's a must-try!`,
        clientName : `Maria Rodriguez`,
        clientImg: `wo_3`,
        clientProfession:`Architect`
    },
    client_5:{
        comment: `DeliveryHub has made my evenings stress-free. Whether I'm craving pizza, sushi, or something else, they have it all. It's like having a personal chef at my fingertips!`,
        clientName : `James Welson`,
        clientImg: `ma_2`,
        clientProfession:`Sales Manager`
    },
    client_6:{
        comment: `DeliveryHub has saved me time and effort. Their quick and reliable service means I can enjoy restaurant-quality food without leaving my home. I'm a loyal customer!`,
        clientName : `Michail Chen`,
        clientImg: `ma_3`,
        clientProfession:`Teacher`
    },

}

const prevBtn = document.querySelector(".prev-next .prev"),
      nextBtn = document.querySelector(".prev-next .next");

let clientComment = document.querySelector(".client-div .comment q"),
    clientImg = document.querySelector(".single-client img"),
    clientName = document.querySelector(".single-client span h4"),
    clientProfession = document.querySelector(".single-client span .client-profession");



let currentIndex = 0;
const keysArray = Object.keys(clients);


const incrementIndex = ()=>{
    currentIndex = currentIndex == 5? 0 : currentIndex + 1;
}

const decrementIndex = ()=>{
    currentIndex = currentIndex == 0? 5 : currentIndex -1;
}


// ... (your existing code)

nextBtn.addEventListener("click", () => {
    incrementIndex();
    const currentClient = clients[keysArray[currentIndex]]; // Access the current client object
    clientComment.textContent = currentClient.comment; // Access the comment property
    clientImg.src = `./images/clients/${currentClient.clientImg}.png`;
    clientName.textContent = currentClient.clientName;
    clientProfession.textContent = currentClient.clientProfession;
});

prevBtn.addEventListener("click", () => {
    decrementIndex();
    const currentClient = clients[keysArray[currentIndex]]; // Access the current client object
    clientComment.textContent = currentClient.comment; // Access the comment property
    clientImg.src = `./images/clients/${currentClient.clientImg}.png`;
    clientName.textContent = currentClient.clientName;
    clientProfession.textContent = currentClient.clientProfession;
});


// nextBtn.addEventListener("click",()=>{
//     incrementIndex();
//     clientComment.textContent = clients[`client_${currentIndex}`].clientComment;
//     clientImg.src = `./images/clients/${clients[currentIndex].clientImg}.png`;
//     clientName.textContent= clients[currentIndex].clientName ;
//     clientProfession.textContent = clients[currentIndex].clientProfession;
    
// })
// prevBtn.addEventListener("click",()=>{
//     decrementIndex();
//     clientComment.textContent = clients[currentIndex].clientComment;
//     clientImg.src = `./images/clients/${clients[currentIndex].clientImg}.png`;
//     clientName.textContent= clients[currentIndex].clientName ;
//     clientProfession.textContent = clients[currentIndex].clientProfession;
// });


