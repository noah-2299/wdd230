
const navItems = document.getElementById('navbar');
const hamburgerButton = document.getElementById('button');
let isActive = false;

function activateMenu(){
    if (isActive){
        navItems.classList.remove("active");
        navItems.classList.add('inactive');
        hamburgerButton.textContent = '≡';
        isActive = false;
    }    
    else{
        navItems.classList.remove('inactive');
        navItems.classList.add('active');
        hamburgerButton.textContent ='X';
        isActive = true;
    }
    console.log('button pushed')
}

hamburgerButton.addEventListener('click', activateMenu);