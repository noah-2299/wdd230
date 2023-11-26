
const memberURL = "https://noah-2299.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(memberURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data);
  }
getMembers();
  const displayMembers = (data) => {
    let parent = document.getElementById('member-cards');
    data.members.forEach(member => {
      let card = document.createElement('div');
      card.classList.add('member');
      let company_name = document.createElement('p');
      company_name.classList.add('company');
      let address = document.createElement('p');
      let phone_number = document.createElement('p');
      phone_number.classList.add('phone');
      let website = document.createElement('a');
      let icon_img = document.createElement('img');
      let level = document.createElement('p');
      icon_img.setAttribute('src', member.image);
      icon_img.setAttribute('alt', `Icon image for ${member.company_name}`);
      icon_img.setAttribute('loading', 'lazy');

      company_name.textContent = `${member.company_name}`;
      address.textContent = `${member.address} `;
      phone_number.textContent =`${member.phone_number}`;
      website.innerText = `${member.website}`;
      website.setAttribute('href',`${member.image}`);



      card.appendChild(company_name);
      card.appendChild(icon_img);
      card.appendChild(address);
      card.appendChild(phone_number);
      card.appendChild(website);
      
      card.appendChild(level);
      
      parent.appendChild(card)
      
    });
  }

const grid_button= document.querySelector('#grid-button');
const list_button = document.querySelector('#list-button');


grid_button.addEventListener('click', () => {
  let parent = document.getElementById('member-cards'); 
  parent.classList.add('grid-view');
parent.classList.remove('list-view'); }, false);
list_button.addEventListener('click', () => { 
  let parent = document.getElementById('member-cards');
  parent.classList.remove('grid-view');
parent.classList.add('list-view'); }, false);
