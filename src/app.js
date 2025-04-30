import * as Yup from "https://cdn.jsdelivr.net/npm/yup@1.4.0/+esm";
import i18next from './locales/index.js';

const validationSchema = () => Yup.object().shape({
    username: Yup.string()
        .required(i18next.t('validation.username_required'))
        .min(2, i18next.t('validation.username_min', { min: 2 }))
        .max(20, i18next.t('validation.username_max', { max: 20 })),

    password: Yup.string()
        .required(i18next.t('validation.password_required'))
        .min(3, i18next.t('validation.password_min', { min: 3 }))
        .max(10, i18next.t('validation.password_max', { max: 10 })),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], i18next.t('validation.passwords_mismatch'))
        .required(i18next.t('validation.confirm_password_required'))
});

export { validationSchema };


// const validationSchema = Yup.object().shape({
//     username: Yup.string()
//         .required("Name is required")
//         .min(2, 'min 2 characters')
//         .max(20, 'max 2 characters'),
//
//     password: Yup.string()
//         .required("Password is required")
//         .min(3, 'min 3 characters')
//         .max(10, 'max 10 characters'),
//
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords do not match')
//         .required("Confirm is required"),
// });