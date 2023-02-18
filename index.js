document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price__img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.5) / 8) + 'px,' + ((event.clientY * 0.5) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".hero");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.scrollY) + 'px';
    })
});