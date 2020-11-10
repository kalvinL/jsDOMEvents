let first = document.querySelector('.first');
let second = document.querySelector('.second');


first.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

first.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'grey';
});

second.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'green';
});

second.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'grey';
});