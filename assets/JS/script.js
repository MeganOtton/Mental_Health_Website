// On Scroll NavBar Change //
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#434db0';
        } else {
            navbar.style.backgroundColor = '#707CCE';
        }
    }
});
