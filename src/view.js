import {validationSchema} from "./app.js";
import i18next from './locales/index.js';

let schema = validationSchema();

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button is pressed');
    // resetValidation();
    const formData = {
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
    };

    schema.validate(formData, { abortEarly: false })
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
            error.inner.forEach(err => {
                const input = document.getElementById(err.path);
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
                const errorMessage = document.getElementById(`error-${err.path}`);
                errorMessage.textContent = err.message;
            })
        })
});

document.getElementById('lang-ru').addEventListener('click', () => {
    i18next.changeLanguage('ru').then(() => {
        schema = validationSchema();
        console.log('RUUUU');
    });
});

document.getElementById('lang-en').addEventListener('click', () => {
    i18next.changeLanguage('en').then(() => {
        schema = validationSchema();
        console.log('EEENGGG');
    });
});