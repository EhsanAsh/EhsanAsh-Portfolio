// Desc: This file contains the code for the contact page using form component.
// ========================================================
// https://www.npmjs.com/package/@emailjs/browser
// https://www.emailjs.com/docs/
// ===================================================

// Importing Validation function and EmailJS
// ========================================================
import { validateEmail } from '../utils/validation';
import emailjs from '@emailjs/browser';
// ========================================================

// importing packages
// ========================================================
import { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
// ========================================================

// importing form component
// ========================================================
import ContactForm from '../components/contactForm';
import ContactPagePic from '../assets/image/ContactPagePic.png';
// ========================================================

// Creating the contact page
// ========================================================
const Contact = () => {

    // State for managing form data with initial values
    // ============================================================
    const [formData, setFormData] = useState({
        user_name: '',
        user_last_name: '',
        user_email: '',
        message: ''
    });
    // ============================================================

    // State for managing messages to the user (like success or error messages)
    const [message, setMessage] = useState('');

    // Function to handle changes in the form input fields
    // ============================================================
    const handleChange = (event) => {
        // Updating formData state with new values when input changes
        setFormData({ ...formData, [event.target.name]: event.target.value || '' });
    };
    // ============================================================

    // Function to handle email sending on form submission
    // ============================================================
    const sendEmail = async (e) => {
        e.preventDefault();

        // Validate the email address
        if (!validateEmail(formData.user_email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        // Check if the message is empty, if so, set a message
        if (!formData.message) {
            setMessage('Please enter a message.');
            return;
        }

        // check if the username is empty, if so, set a message
        if (!formData.user_name) {
            setMessage('Please enter a name.');
            return;
        }

        // check if the last name is empty, if so, set a message
        if (!formData.user_last_name) {
            setMessage('Please enter a last name.');
            return;
        }

        // check if the email is empty, if so, set a message
        if (!formData.user_email) {
            setMessage('Please enter an email.');
            return;
        }

        // Set up the email template
        const templateParams = {
            from_name: formData.user_name,
            from_email: formData.user_email,
            to_name: 'EhsanAsh',
            message: formData.message
        };

        // Sending email using emailjs with the service ID,
        // template ID, email template, and user ID
        emailjs.send(
            'service_au14aj7',
            'template_xwsj1yr',
            templateParams,
            'g89omQwAW_K878FaC',
        )
            .then((result) => {
                console.log( result.status, result.text);
                setMessage('Message sent successfully!');
                setFormData({
                    user_name: '',
                    user_last_name: '',
                    user_email: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                setMessage('Failed to send the message, please try again.');
            });
    };

    return (

        <Flex
            direction='column'
            justifyContent='center'
            alignItems='space-evenly'
            alignSelf='stretch'
            height='auto'
            gap={2}
            mb={{ base: 20, md: 10 }}
            p={10}
            bgImage={ContactPagePic}
            bgRepeat='no-repeat'
            bgSize={{ base: 'cover', md: 'contain' }}
            bgPosition={{ base: 'center', md: 'right' }}
            bgAttachment='scroll'
            _before={{ // Pseudo-element for overlay
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                bg: 'rgba(255, 255, 255, 0.4)',
                zIndex: 0,
            }}
            _after={{
                content: '""',
                position: 'absolute',
                zIndex: 1,
            }}
        >
            <Box position="relative" zIndex={2}>
                <ContactForm
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                    sendEmail={sendEmail}
                    message={message}
                    setMessage={setMessage}
                />
            </Box>

        </Flex>

    );

};
// ========================================================

// Exporting the contact page
// ========================================================
export default Contact;
// ========================================================