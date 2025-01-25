function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
}

function adjustWidth() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');

    if (width >= 992 && width <= 1600) {
        container.style.transform = 'scale(0.9)';
        container.style.transformOrigin = 'top left';
    } else if (width >= 700 && width < 992) {
        container.style.transform = 'scale(0.8)';
        container.style.transformOrigin = 'top left';
    } else if (width >= 600 && width < 700) {
        container.style.transform = 'scale(0.75)';
        container.style.transformOrigin = 'top left';
    } else if (width <= 600) {
        container.style.transform = 'scale(0.5)';
        container.style.transformOrigin = 'top left';
    } else {
        container.style.transform = 'scale(1)';
    }
}

window.addEventListener('resize', adjustWidth);
window.addEventListener('load', adjustWidth);