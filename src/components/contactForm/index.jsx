// Desc: Creating the form component, which will display a
// form when rendered in order to let the user to send an email.
// Used Followings as a reference:
// https://chakra-ui.com/docs/components/form-control
// https://chakra-ui.com/docs/components/input
// https://chakra-ui.com/docs/components/input/theming
// ========================================================

// importing packages
// ========================================================
import { useEffect } from 'react';
import {
    Box,
    Spacer,
    Heading,
    Text,
    Button,
    Input,
    Link as ChakraLink,
    Card,
    CardBody,
    CardHeader,
} from '@chakra-ui/react';
// ========================================================

// Creating the form component
// ========================================================
const ContactForm = ({
    formData,
    handleChange,
    sendEmail,
    message,
    setMessage,
}) => {

    useEffect(() => {
        let timer;
        if (message) {
            timer = setTimeout(() => {
                setMessage('');
            }, 5000);
        }
        return () => clearTimeout(timer); // Clear the timer when the component unmounts or the message changes
    }, [message, setMessage]);

    return (

        <>

            <Heading
                as={'h1'}
                size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                fontFamily={'josefinSlabTitle'}
                fontWeight={'500'}
                display={'inline-block'}
            >
                Welcome {formData.user_name}
            </Heading>
            <Card size={'md'} variant={'contact'}>
                <CardHeader>
                    <Heading
                        as={'h2'}
                        size={{ base: 'lg', md: 'xl' }}
                        fontFamily={'josefinSlabTitle'}
                        fontWeight={'500'}
                    >
                        Ways to contact me:
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'10px'}
                    >
                        <i className="fa-duotone fa-mailbox-flag-up fa-xl"></i>
                        <Text color={'brand.error'}>
                            Email: ehsan.ashrafipour@gmail.com
                        </Text>
                    </Box>
                    <Button
                        leftIcon={<i className="fa-brands fa-linkedin fa-2xl"></i>}
                        variant={'socialMediaContact'}
                    >
                        <ChakraLink
                            as={'a'}
                            href={'https://www.linkedin.com/in/ehsan-ashrafipour-922056245/'}
                            isExternal
                        >
                            <Text color={'brand.error'}>LinkedIn</Text>
                        </ChakraLink>
                    </Button>
                    <Button
                        leftIcon={<i className="fa-brands fa-square-github fa-2xl"></i>}
                        variant={'socialMediaContact'}
                    >
                        <ChakraLink
                            as={'a'}
                            href={'https://github.com/EhsanAsh'}
                            isExternal
                        >
                            <Text color={'brand.error'}>GitHub</Text>
                        </ChakraLink>
                    </Button>
                    <Button
                        leftIcon={<i className="fa-brands fa-square-x-twitter fa-2xl"></i>}
                        variant={'socialMediaContact'}
                    >
                        <ChakraLink
                            as={'a'}
                            href={'https://twitter.com/EhsanAsh_5123'}
                            isExternal
                        >
                            <Text color={'brand.error'}>Twitter</Text>
                        </ChakraLink>
                    </Button>
                </CardBody>
            </Card>
            <Spacer />
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                p={'20px'}
                width={[400, 450, 500, 550, 600]}
            >
                <form onSubmit={sendEmail} id="contact-form">

                    <Input
                        id="user_name"
                        name="user_name"
                        label="Name"
                        type="text"
                        value={formData.user_name || ''}
                        onChange={handleChange}
                        placeholder='Enter your name'
                        required
                        autoFocus
                    />

                    <Input
                        id="user_last_name"
                        name="user_last_name"
                        label="Last Name"
                        type="text"
                        value={formData.user_last_name || ''}
                        onChange={handleChange}
                        placeholder='Enter your last name'
                        required
                    />

                    <Input
                        id="user_email"
                        name="user_email"
                        label="Email"
                        type="email"
                        value={formData.user_email || ''}
                        onChange={handleChange}
                        placeholder='Enter your email'
                        required
                    />

                    <Input
                        id="message"
                        name="message"
                        label="Message"
                        type="text"
                        rows={5}
                        value={formData.message || ''}
                        onChange={handleChange}
                        placeholder='Enter your message'
                        required
                    />

                    <Button
                        type="submit"
                        variant={'outlineDark'}
                        alignSelf={'stretch'}
                        width={'100%'}
                    >
                        Send
                    </Button>

                    {message && (
                        <Text color={'brand.error'} fontSize={'md'} py={'3'} textAlign={'center'}>{message}</Text>
                    )}

                </form>
            </Box>

        </>

    );

};
// ========================================================

// exporting the Form function
// ========================================================
export default ContactForm;
// ========================================================