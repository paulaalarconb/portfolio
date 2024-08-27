document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const pict1 = document.getElementById('closed');
    const pict2 = document.getElementById('opened');
    if (window.scrollY > document.querySelector('header').offsetHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
