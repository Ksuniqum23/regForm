import * as Yup from "https://cdn.jsdelivr.net/npm/yup@1.4.0/+esm";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("Name is required")
        .min(2, 'min 2 characters')
        .max(20, 'max 2 characters'),

    password: Yup.string()
        .required("Password is required")
        .min(3, 'min 3 characters')
        .max(10, 'max 10 characters'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required("Confirm is required"),
});

export { validationSchema };