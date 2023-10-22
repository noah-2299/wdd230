const navItems = document.getElementById('navbar');
const hamburgerButton = document.getElementById('button');
let isActive = false;

function activateMenu(){
    if (isActive){
        navItems.classList.remove("active");
        navItems.classList.add('inactive');
        isActive = false;
    }    
    else{
        navItems.classList.remove('inactive');
        navItems.classList.add('active');
        isActive = true;
    }
    console.log('button pushed')
}

hamburgerButton.addEventListener('click', activateMenu);