const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const password = event.target.password.value;
    if (!isValidPassword(password)) {
        alert('Password does not meet security criteria.');
        event.preventDefault();
    }
});
function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
