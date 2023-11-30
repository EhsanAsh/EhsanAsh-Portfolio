// Desc: This file contains user input and submit handler for the form component
// ===================================================

// Importing Validation function
// ========================================================
import { validateEmail } from './validation';
// ========================================================

// Input handler
// ===================================================
const handleInputChange = (event, setFunctions) => {

    // getting the value and name
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
const submitHandler = (event, email, setFunctions) => {

    event.preventDefault();

    if (!validateEmail(email)) {
        setFunctions.error('Email is invalid');
        return;
    }

    setFunctions.name('');
    setFunctions.email('');
    setFunctions.text('');
    setFunctions.error('');
};
// ===================================================

// Export functions
// ===================================================
export { handleInputChange, submitHandler };
// ===================================================