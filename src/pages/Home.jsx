// Desc: This file contains the Home page component for the app.
// ============================================================

// Import packages
// ============================================================
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Center,
    Flex,
    Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
// ============================================================

// Define Home function
// ============================================================
function Home() {
    return (

        <Flex
            direction={'column'}
            width='100%'
            height='auto'
            alignItems='center'
            justifyContent='center'
            alignSelf='stretch'
            px='60px'
            transform={[
                'translateY(-65px)',
                'translateY(-70px)',
                'translateY(-75px)',
                'translateY(-80px)'
            ]}
        >
            <Box
                gap={7}
                position="relative"
                h="100vh"
                lineHeight='1.7'
                maxWidth='900px'
            >
                <Center>
                    <Card>
                        <CardHeader
                            borderBottom={'solid 2px'}
                            borderColor={'brand.orange'}
                            pb={2}
                        >
                            <Heading
                                as="h2"
                                size="lg"
                                fontFamily={'josefinSlabTitle'}
                            >
                                Welcome to my React portfolio!
                            </Heading>
                        </CardHeader>
                        <CardBody py={3}>
                            <Text>This single-page application portfolio is designed for employers like you who are looking for candidates with experience building single-page applications. You can use this portfolio to view my work samples and assess whether I am a good fit for your open position.</Text>
                            <Text>Click the button below to proceed to the Portfolio page.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme="orange" size="lg" variant="solid">
                                <ChakraLink as={ReactRouterLink} to='/portfolio'>
                                    Portfolio
                                </ChakraLink>
                            </Button>
                        </CardFooter>
                    </Card>
                </Center>
            </Box>
        </Flex>

    );
}
// ============================================================

// Export Home
// ============================================================
export default Home;
// ============================================================