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
            gap={20}
            px='60px'
            transform={[
                'translateY(-63px)',
                'translateY(-68px)',
                'translateY(-73px)',
                'translateY(-78px)'
            ]}
        >
            <Box
                gap={7}
                position="relative"
                lineHeight='1.7'
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
                                size="md"
                                fontFamily={'josefinSlabTitle'}
                                color='brand.darkBlue'
                            >
                                WELCOME TO MY REACT PORTFOLIO!
                            </Heading>
                        </CardHeader>
                        <CardBody py={3}>
                            <Text>This single-page application portfolio is designed for employers like you who are looking for candidates with experience building single-page applications. You can use this portfolio to view my work samples and assess whether I am a good fit for your open position.</Text>
                            <Text>Click the button below to proceed to the Portfolio page.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button
                                colorScheme="orange"
                                size="md"
                                variant="outline"
                                borderRadius={0}
                                _hover={{ color: 'brand.lightGreen' }}
                            >
                                <ChakraLink as={ReactRouterLink} to='/portfolio'>
                                    Portfolio
                                </ChakraLink>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader
                            borderBottom={'solid 2px'}
                            borderColor={'brand.orange'}
                            pb={2}
                        >
                            <Heading
                                as="h2"
                                size="md"
                                fontFamily={'josefinSlabTitle'}
                                color='brand.darkBlue'
                            >
                                PROJECTS
                            </Heading>
                        </CardHeader>
                        <CardBody py={3}>
                            <Text>AdsTrees, a revolutionary web application that intertwines the power of advertising with environmental sustainability. It offers a unique platform where viewers can watch premium ads voluntarily, and in return, trees are planted, contributing to a greener planet...</Text>
                            <Text>Click the button below to proceed to the Projects page.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button
                                colorScheme="orange"
                                size="md"
                                variant="outline"
                                borderRadius={0}
                                _hover={{ color: 'brand.lightGreen' }}
                            >
                                <ChakraLink as={ReactRouterLink} to='/projects'>
                                    Projects
                                </ChakraLink>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader
                            borderBottom={'solid 2px'}
                            borderColor={'brand.orange'}
                            pb={2}
                        >
                            <Heading
                                as="h2"
                                size="md"
                                fontFamily={'josefinSlabTitle'}
                                color='brand.darkBlue'
                            >
                                WHY HIRE ME!
                            </Heading>
                        </CardHeader>
                        <CardBody py={3}>
                            <Text>I&apos;m a Full-Stack Developer and the University of Toronto Alumnus with a Certificate in Full-stack Application Development, boasting a remarkable graduation score of 96.07 (A). With a lifelong passion for programming and software development, I bring a blend of creativity, problem-solving skills, and a commitment to creating impactful solutions. </Text>
                            <Text>
                                Click on buttons below to proceed to my LinkedIn or GitHub profile.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button
                                colorScheme="orange"
                                size="md"
                                variant="outline"
                                border='none'
                                gap={5}
                            >
                                <ChakraLink
                                    as={ReactRouterLink}
                                    to='https://www.linkedin.com/in/ehsan-ashrafipour-922056245/'
                                    isExternal
                                >
                                    <i className="fa-brands fa-linkedin fa-beat fa-2xl"></i>
                                </ChakraLink>
                                <ChakraLink
                                    as={ReactRouterLink}
                                    to='https://github.com/EhsanAsh'
                                    isExternal
                                >
                                    <i className="fa-brands fa-github fa-beat fa-2xl"></i>
                                </ChakraLink>
                            </Button>
                        </CardFooter>
                    </Card>
                </Center>
            </Box>
            <Box
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                justifyItems={'stretch'}
                alignSelf={'stretch'}
                width='100%'
                gap={5}
                p={2}
            >
                <Heading
                    as="h2"
                    size="lg"
                    fontFamily={'josefinSlabTitle'}
                    fontWeight={'700'}
                    color='brand.darkBlue'
                    borderBottom={'solid 2px'}
                    borderColor={'brand.orange'}
                >
                    EDUCATION
                </Heading>
                <Box
                    display={'flex'}
                    flexDir={'column'}
                    alignItems={'flex-start'}
                    justifyContent={'center'}
                    justifyItems={'stretch'}
                    alignSelf={'stretch'}
                    width='100%'
                    gap={5}
                    p={2}
                >
                    <Box
                        bg='brand.orange'
                        borderRadius={'full'}
                        p={1.5}
                        boxSize={'50px'}
                        alignContent={'center'}

                    >
                        <i className="fa-duotone fa-graduation-cap fa-xl"></i>
                    </Box>
                    <Box
                        bg='brand.orange'
                        borderRadius={'full'}
                        p={1.5}
                        boxSize={'50px'}
                        alignContent={'center'}
                    >
                        <i className="fa-duotone fa-graduation-cap fa-xl"></i>
                    </Box>
                </Box>
            </Box>
        </Flex>

    );
}
// ============================================================

// Export Home
// ============================================================
export default Home;
// ============================================================