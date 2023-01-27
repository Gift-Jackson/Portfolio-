const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    let scroll_Y = window.scrollY;
    if(scroll_Y > 120) {
        header.classList.add('scroll');
    }
    
    else{
        header.classList.remove('scroll')
    }
})
