// Desc: Creating the form component, which will display a
// form when rendered in order to let the user to send an email.
// ========================================================

// importing packages
// ========================================================
import { useState } from 'react';
// ========================================================

// Importing input and submit handler
// ========================================================
import { handleInputChange, submitHandler } from '../../utils/handleInputSubmit';
// ========================================================

// Creating the form component
// ========================================================
const Form = () => {

    // State variables for the fields in the form
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [text, setText] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Define an object to be sent through onchange
    // method to be used by handleInputChange function.
    const setFunctions = {
        email: setEmail,
        text: setText,
        error: setErrorMessage,
        name: setName,
        success: setSuccessMessage,
        submitted: setIsSubmitted,
    };

    // Define a function to be sent through onsubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        submitHandler(event, email, name, text, setFunctions);
        setIsSubmitted(false);
        setSuccessMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Welcome {name}</p>

            <input
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={event => handleInputChange(event, setFunctions)}
                required
            />

            <input
                id="name"
                label="Name"
                name='name'
                type="text"
                value={name}
                onChange={event => handleInputChange(event, setFunctions)}
                required
            />

            <input
                id="message"
                label="Message"
                name='text'
                rows={4}
                value={text}
                onChange={event => handleInputChange(event, setFunctions)}
                required
            />

            <button type="submit">Send</button>

            <div>
                <div>
                    {/* <EmailIcon /> */}
                    <p >
                        ehsan.ashrafipour@gmail.com
                    </p>
                </div>
                <div>
                    {/* <PhoneIcon /> */}
                    <p>
                        +1 (647) 448-1636
                    </p>
                </div>
            </div>

            {errorMessage && <p color="error">{errorMessage}</p>}
            {successMessage && <p color="success">{successMessage}</p>}
            {isSubmitted && <p>Form submitted successfully!</p>}
        </form>
    );
};
// ========================================================

// exporting the Form function
// ========================================================
export default Form;
// ========================================================