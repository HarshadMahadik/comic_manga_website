const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Form validation
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Additional validation (e.g., email format)
    // Submit the form if validation passes
    signUpForm.submit();
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('signinUsername').value.trim();
    const password = document.getElementById('signinPassword').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Additional validation and authentication logic
    // Submit the form if validation passes
    signInForm.submit();
});
