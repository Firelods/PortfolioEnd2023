const projetsActive = document.querySelector('.projets-dropdown .active');
const projetsDropdown = document.querySelector('.projets-dropdown');

projetsActive.addEventListener('click', () => {
    if (projetsDropdown.classList.contains('opened')) {
        projetsDropdown.classList.remove('opened');
    } else {
        projetsDropdown.classList.add('opened');
    }
});

const gradCap = document.querySelector('#gradCap');
gradCap.addEventListener('click', (e) => {
    console.log(e.target);
    if (!e.target.parentElement.classList.contains('active')) {

        window.location.href = 'school.html';
    }
});

const folder = document.querySelector('#folder');
folder.addEventListener('click', (e) => {
    console.log(e.target);
    if (!e.target.parentElement.classList.contains('active')) {

        window.location.href = 'index.html';
    }
});