let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');


first.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

first.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'grey';
});

second.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

second.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'grey';
});

third.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'green';
});

third.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'grey';
});