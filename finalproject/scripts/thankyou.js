const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

document.querySelector('#form-results').innerHTML = `
    <p><strong> Name:</strong> ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
    <p><strong>Contact Phone:</strong> ${myInfo.get('phone')}</p>
    <p><strong>Registered Email:</strong> ${myInfo.get('email')}</p>
`;

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;