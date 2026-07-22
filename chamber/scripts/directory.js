const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const container = document.querySelector('#membersContainer');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');


const jsonURL = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error("HTTP error! ");
        }
        const data = await response.json();
        createMemberCards(data);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}


function createMemberCards(members) {
    container.innerHTML = "";

    members.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("member-card"); 

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let phone = document.createElement("p");
        let level = document.createElement("p");
        let website = document.createElement("a");
        let img = document.createElement("img");

        
        name.textContent = member.name;
        location.innerHTML = `<span class="label">Address:</span> ${member.address}`;
        phone.innerHTML = `<span class="label">Phone:</span> ${member.phone}`;
        level.innerHTML = `<span class="label">Membership:</span> ${member.membershipLevel}`;

        
        website.href = member.websiteURL;
        website.textContent = "Visit Website";
        website.target = "_blank";
        website.rel = "noopener noreferrer";

    
        img.setAttribute("src", member.image);
        img.setAttribute("alt", `${member.name} Logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "150");
        img.setAttribute("height", "100");

        
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(phone);
        card.appendChild(level);
        card.appendChild(website);

        container.appendChild(card);
    });
}



gridBtn.addEventListener('click', () => {
    container.classList.add('grid-view');
    container.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list-view');
    container.classList.remove('grid-view');
    container.classList.add('grid-view'); 
    gridBtn.classList.add('active');      
    getMembers();
});


getMembers();
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;