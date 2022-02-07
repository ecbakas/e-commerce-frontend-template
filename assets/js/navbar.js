const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navMobile = document.querySelector('.nav-mobile');
    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
		navMobile.classList.toggle('nav-mobile-opened')
    });	
}
navSlide();