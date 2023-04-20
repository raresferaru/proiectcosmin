const body = document.querySelector('body');
const lilnav = document.querySelector('.lilnav');
const bars = document.querySelector('.fa-bars');
const lilnavl1s = document.querySelectorAll('.lilnavl1');
bars.addEventListener('click', () => {
    if (lilnav.style.display === 'none') {
        lilnav.style.display = 'block';
    } else {
        lilnav.style.display = 'none';
    }
})



window.onresize = () => {
    lilnav.style.display = 'none';
}

for (let lilnavl1 of lilnavl1s) {
    lilnavl1.addEventListener('click', () => {
        lilnav.style.display = 'none';
    })
}


