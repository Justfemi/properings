/* const showMenu = ( toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if ( toggle && nav ) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    }
}
showMenu ('nav-toggle','nav-menu');

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
} 

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.major', {})
sr.reveal('.btn-start', {delay: 200})
sr.reveal('.search__container', {delay: 400})
sr.reveal('.search__box', {interval: 200})

sr.reveal('.about__img', {})
sr.reveal('.about__header', {delay: 200})
sr.reveal('.about__text', {delay: 400}) 
sr.reveal('.btn-about', {interval: 200})

sr.reveal('.work__header', {})
sr.reveal('.work__box1', {delay: 200})
sr.reveal('.work__box2', {interval: 200})
sr.reveal('.work__box2', {interval: 200})


sr.reveal('.why__header', {})
sr.reveal('.why__img', {delay: 200})
sr.reveal('.card1x', {interval: 200})
sr.reveal('.card2x', {interval: 200})
sr.reveal('.card3x', {interval: 200})

sr.reveal('.test__header', {})
sr.reveal('.card1', {interval: 200})
sr.reveal('.card2', {interval: 200})
sr.reveal('.card3', {interval: 200})

sr.reveal('.footer-content', {interval: 200})   */