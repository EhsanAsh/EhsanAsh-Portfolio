// Desc: Creating the form component, which will display a
// form when rendered in order to let the user to send an email.
// ========================================================

// importing packages
// ========================================================
import { useState } from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Typography, Box } from '@mui/material';
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

    const StyledBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
        backgroundColor: theme.palette.background.main,
        marginTop: '1rem',
        marginBottom: '1rem',
        padding: '1rem',
    }));

    const StyledButton = styled(Button)({
        marginTop: '1rem',
        marginBottom: '1rem',
        maxWidth: '10rem',
    });

    const StyledTextField = styled(TextField)({
        width: '100%',
        maxWidth: '20rem',
        margin: '.3rem',
    });

    return (
        <StyledBox component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <Typography variant="h5" component="h1" sx={{ textAlign: 'center', color: '#457b9d' }}>
                Welcome {name}
            </Typography>

            <StyledTextField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={event => handleInputChange(event, setFunctions)}
                required
                sx={{
                    borderLeft: '.2rem solid #5a189a',
                    borderRadius: '.5rem',
                }}
            />

            <StyledTextField
                id="name"
                label="Name"
                name='name'
                type="text"
                value={name}
                onChange={event => handleInputChange(event, setFunctions)}
                required
                sx={{
                    borderLeft: '.2rem solid #5a189a',
                    borderRadius: '.5rem',
                }}
            />

            <StyledTextField
                id="message"
                label="Message"
                name='text'
                multiline
                rows={4}
                value={text}
                onChange={event => handleInputChange(event, setFunctions)}
                required
                sx={{
                    borderLeft: '.2rem solid #5a189a',
                    borderRadius: '.5rem',
                }}
            />

            <StyledButton type="submit" variant="contained">Send</StyledButton>

            {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            {successMessage && <Typography color="success">{successMessage}</Typography>}
            {isSubmitted && <Typography>Form submitted successfully!</Typography>}
        </StyledBox>
    );
};
// ========================================================

// exporting the Form function
// ========================================================
export default Form;
// ========================================================