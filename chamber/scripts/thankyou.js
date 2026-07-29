const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)


document.querySelector('#result').innerHTML = `
    <p>Application for ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
    <p>Organization Title for ${myInfo.get('title')}</p>
    <p>Organization Title for ${myInfo.get('membership')}</p>
    <p>Contact information for ${myInfo.get('phone')}</p>
   <p>Contact information for ${myInfo.get('email')} </p>`;