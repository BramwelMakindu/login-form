let signup = document.getElementById('signup');
let signin = document.getElementById('signin');
let body = document.querySelector('body');

signup.addEventListener('click', () => {
    body.classList.add('signup');
});

signin.addEventListener('click', () => {
    body.classList.remove('signup');
});