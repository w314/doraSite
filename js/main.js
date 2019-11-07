/**
* Add event listeners when page is loaded
**/

// const path = window.location.pathname;
// console.log(path);
// const pos = path.lastIndexOf('/');
// console.log(pos);
// const page = path.slice(pos+1, -4)
// console.log(page)

document.addEventListener('DOMContentLoaded', () => {
    navMenu();
})


/** 
* Adds navigation link to page
**/
navMenu = () => {

    const path = window.location.pathname;
    console.log(path);
    const pos = path.lastIndexOf('/');
    console.log(pos);
    const page = path.slice(pos+1, -4);
    console.log(page);
    const activeLinkElement = document.getElementById(page);
    console.log(activeLinkElement);
    activeLinkElement.classList.add('active')

    let navigationMenu = ['Home', 'About', 'Programs', 'Services', 'Testimonials', 'Contact'];
}


