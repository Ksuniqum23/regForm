// npm install i18next i18next-browser-languagedetector
import i18next from 'https://esm.sh/i18next@23.4.6';
import ru from './ru.js';
import en from './en.js';

i18next.init({
    lng: 'ru', // Язык по умолчанию
    resources: {
        ru: { translation: ru },
        en: { translation: en },
    },
});

export default i18next;