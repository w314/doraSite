/**
* Add event listeners when page is loaded
**/
document.addEventListener('DOMContentLoaded', () => {
    navMenu();
    hambruger();
})


/** 
* Adds active class to active menu item
**/
navMenu = () => {
    const bodyElement = document.body;
    console.log(bodyElement);
    const uri = bodyElement.baseURI;
    console.log(uri);
    const pos = uri.lastIndexOf('/');
    console.log(pos);
    const page = uri.slice(pos+1, -4);
    console.log(page);
    const activeLinkElement = document.getElementById(page);
    console.log(activeLinkElement);
    activeLinkElement.classList.add('active')
}


hamburger = () => {
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click',() => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.add('open');
        hamburger.classList.add('hide');
    })
}

serviceMenu = () => {
    const serviceMenu = document.getElementById('services');
    const servicesSubMenu = doucment.getElementById('services-menu');
    serviceMenu.addEventListener('onmouseover', () => {
        servicesSubMenu.classList.add('show');
    })
}
