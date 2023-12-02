// Desc: This file contains user input and submit
// handler for the form component
// for this file I have used the following documentations:
// https://www.npmjs.com/package/@emailjs/browser
// https://www.emailjs.com/docs/
// ===================================================

// Importing Validation function and EmailJS
// ========================================================
import { validateEmail } from './validation';
//EmailJS helps to send emails using client-side technologies only
import emailjs from '@emailjs/browser';
// ========================================================

// Input handler
// ===================================================
const handleInputChange = (event, setFunctions) => {

    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType in setFunctions) {
        setFunctions[inputType](inputValue);
    }

};
// ===================================================

// Submit handler
// ===================================================
const submitHandler = (event, email, name, text, setFunctions) => {

    event.preventDefault();

    if (!validateEmail(email)) {
        setFunctions.error('Email is invalid');
        return;
    }

    // setting up the email template
    const templateParams = {
        from_name: name,
        from_email: email,
        message: text
    };

    // using emailjs to send email
    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
        .then((response) => {
            console.log(response.status, response.text);
            if (response.status === 200) {
                setFunctions.submitted(true);
                setFunctions.success('Email sent successfully!');
            }
            setFunctions.email('');
            setFunctions.name('');
            setFunctions.text('');
            setFunctions.error('');
        }, (error) => {
            console.log(error.text);
            setFunctions.error('Email failed to send');
        });

};
// ===================================================

// Export functions
// ===================================================
export { handleInputChange, submitHandler };
// ===================================================