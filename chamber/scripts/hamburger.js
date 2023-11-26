const navItems = document.getElementById('navbar');
const hamburgerButton = document.getElementById('button');
let isActive = false;
// Broken code to try and show descripting of tiers needs work
// const row = document.addEventListener('hover')
// const descriptions = document.querySelectorAll('trdd');
// descriptions.forEach((description) => {
//     description.classList.remove('active')
// });

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

}

hamburgerButton.addEventListener('click', activateMenu);