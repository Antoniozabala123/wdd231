const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const openButton1 = document.querySelector("#openbutton1");
const openButton2 = document.querySelector("#openbutton2");
const openButton3 = document.querySelector("#openbutton3");
const openButton4 = document.querySelector("#openbutton4");
const dialogbox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeButton");

// Event to open

openButton1.addEventListener('click', () => {
    dialogBoxText.innerHTML = "Access to community events, free resources, and more.";
    dialogbox.showModal();
});
openButton2.addEventListener('click', () => {
    dialogBoxText.innerHTML = "Discounted services, networking opportunities, and exclusive events.";
    dialogbox.showModal();
});
openButton3.addEventListener('click', () => {
    dialogBoxText.innerHTML = "Gold Membership Benefits";
    dialogbox.showModal();
});
openButton4.addEventListener('click', () => {
    dialogBoxText.innerHTML = "Gold Membership Benefits";
    dialogbox.showModal();
});


closeButton.addEventListener('click', () => {
    dialogbox.close();
});
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

