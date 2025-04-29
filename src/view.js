import {validationSchema} from "./app.js";

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button is pressed');
    // resetValidation();
    const formData = {
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
    };

    validationSchema.validate(formData, { abortEarly: false })
        .then((result) => {
            console.log(result);
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            })
        })
        .catch((error) => {
            console.log(error.inner);
            error.inner.forEach(error => {
                const input = document.getElementById(error.path);
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
                const errorMessage = document.getElementById(`error-${error.path}`);
                errorMessage.textContent = error.message;
            })
        })
});