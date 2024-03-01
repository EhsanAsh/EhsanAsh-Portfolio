/* eslint-disable no-unused-vars */
// Desc: This file contains the Home page component for the app.
// ============================================================

// Import packages
// ============================================================
import React, { useState, useEffect, useRef } from 'react';
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
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import {
    InfoOutlineIcon,
    DragHandleIcon,
    TimeIcon,
    StarIcon,
    SettingsIcon,
    CheckIcon,
    ExternalLinkIcon
} from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { gsap } from 'gsap';
// ============================================================

// Define Home function
// ============================================================
function Home() {

    // Define state variables for the main cards
    const [currentCard, setCurrentCard] = useState(0);
    const cardInterval = 8000;

    // Define animation timeline
    const cardsContainerRef = useRef();
    const gsapTimeline = useRef(gsap.timeline({ repeat: -1, paused: true }));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % 3);
        }, cardInterval);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {

        const cards = gsap.utils.toArray(cardsContainerRef.current.children);
        const tl = gsapTimeline.current;

        gsap.set(cards, { x: '100%', opacity: 0 });

        // Create a staggered animation for each card
        tl
            .to(cards, {
                x: '0%',
                opacity: 1,
                duration: 2,
                ease: 'power2.in',
                stagger: {
                    each: 2, // Stagger each animation by 2 seconds
                }
            })
            .to(cards, {
                x: '-100%',
                opacity: 0,
                duration: 3,
                ease: 'power2.out',
                stagger: {
                    each: 2, // Stagger each animation by 2 seconds
                    start: 5 // Start the out animation 3 seconds after the in animation
                }
            }, '+=4'); // Offset the out animation by 1 second

        // Play the timeline
        tl.play();

        // Cleanup function to kill the timeline on component unmount
        return () => tl.kill();
    }, []);

    return (

        <Flex
            direction={'column'}
            width='100%'
            height='auto'
            alignItems='center'
            justifyContent='center'
            alignSelf='stretch'
            gap={20}
            transform={[
                'translateY(-73px)',
                'translateY(-77px)',
                'translateY(-74px)',
                'translateY(-77px)',
                'translateY(-82px)'
            ]}
            mb={20}
        >
            <Box
                gap={7}
                position="relative"
                lineHeight='1.7'
                width={[400, 450, 700, 850, 950]}
            >
                <Center>
                    {currentCard === 0 && (
                        <Card>
                            <CardHeader>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: 'md', lg: 'xl', xl: '2xl' }}
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
                                <Button>
                                    <ChakraLink as={ReactRouterLink} to='/portfolio'>
                                    Portfolio
                                    </ChakraLink>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                    {currentCard === 1 && (
                        <Card>
                            <CardHeader>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: 'lg', lg: 'xl', xl: '2xl' }}
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
                                <Button>
                                    <ChakraLink as={ReactRouterLink} to='/projects'>
                                    Projects
                                    </ChakraLink>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                    {currentCard === 2 && (
                        <Card>
                            <CardHeader>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: 'lg', lg: 'xl', xl: '2xl' }}
                                    fontFamily={'josefinSlabTitle'}
                                    color='brand.darkBlue'
                                >
                                WHY HIRE ME!
                                </Heading>
                            </CardHeader>
                            <CardBody py={0}>
                                <Text my={1}>I&apos;m a Full-Stack Developer and the University of Toronto Alumnus with a Certificate in Full-stack Application Development, boasting a remarkable graduation score of 96.07 (A). With a lifelong passion for programming and software development, I bring a blend of creativity, problem-solving skills, and a commitment to creating impactful solutions. </Text>
                                <Text>
                                    Click on buttons below to proceed to my LinkedIn or GitHub profile.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Button variant='socialMediaOrange' px={0}>
                                    <ChakraLink
                                        as={ReactRouterLink}
                                        to='https://www.linkedin.com/in/ehsan-ashrafipour-922056245/'
                                        isExternal
                                    >
                                        <i className="fa-brands fa-linkedin fa-beat fa-2xl"></i>
                                    </ChakraLink>
                                </Button>
                                <Button variant='socialMediaOrange'>
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
                    )}
                </Center>
            </Box>
            <Box
                ref={cardsContainerRef}
                position="relative"
                width={{ base: '100%', lg: '70%', xl: '100%' }}
                height="calc(100% + 15px)"
                backgroundColor="rgba(0, 0, 0, 0.1)"
                display="flex"
                flexDir={{ base: 'column', xl: 'row' }}
                alignItems="center"
                justifyContent={{ base: 'center', xl: 'space-evenly' }}
                alignSelf={{ base: 'stretch', md: 'center', xl: 'stretch' }}
                overflow="hidden"
                py={5}
            >
                <Card size='lg' variant={'gsap'}>
                    <CardHeader>
                        <Heading
                            as="h3"
                            fontSize= 'lg'
                            fontFamily={'josefinSlabTitle'}
                            transform={'translateY(-10px)'}
                        >
                            University of Toronto Certificate
                        </Heading>
                    </CardHeader>
                    <CardBody py={2}>
                        <List spacing={3} lineHeight='tall'>
                            <ListItem>
                                <ListIcon as={InfoOutlineIcon} color='brand.orange' />
                                    Full Stack Application Development
                            </ListItem>
                            <ListItem>
                                <ListIcon as={DragHandleIcon} color='brand.orange' />
                                    University of Toronto, Toronto, Ontario
                            </ListItem>
                            <ListItem>
                                <ListIcon as={TimeIcon} color='brand.orange' />
                                    July 2023 - January 2024
                            </ListItem>
                            <ListItem>
                                <ListIcon as={StarIcon} color='brand.orange' />
                                    96.07 / 100 (A)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='brand.orange' />
                                    HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB, MySQL, and more...
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SettingsIcon} color='brand.orange' />
                                            Final Project |  <ChakraLink
                                    as={ReactRouterLink}
                                    to='https://www.adstrees.com/'
                                    isExternal
                                    color='brand.error'
                                >
                                                AdsTrees<ExternalLinkIcon mx='2px' />
                                </ChakraLink>
                            </ListItem>
                        </List>
                    </CardBody>
                </Card>
                <Card size='lg' variant={'gsap'}>
                    <CardHeader>
                        <Heading
                            as="h3"
                            fontSize='lg'
                            fontFamily={'josefinSlabTitle'}
                            transform={'translateY(-10px)'}
                        >
                            Bachelor&apos;s Degree
                        </Heading>
                    </CardHeader>
                    <CardBody py={2}>
                        <List spacing={3} lineHeight='tall'>
                            <ListItem>
                                <ListIcon as={InfoOutlineIcon} color='brand.orange' />
                                    BEng Auto Mechanical Engineering
                            </ListItem>
                            <ListItem>
                                <ListIcon as={DragHandleIcon} color='brand.orange' />
                                    Azad University, Fars, Iran
                            </ListItem>
                            <ListItem>
                                <ListIcon as={TimeIcon} color='brand.orange' />
                                    January 2009 - February 2011
                            </ListItem>
                            <ListItem>
                                <ListIcon as={StarIcon} color='brand.orange' />
                                    18.15 / 20 (A)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='brand.orange' />
                                    Graduated with Honours
                            </ListItem>
                        </List>
                    </CardBody>
                </Card>
                <Card size='lg' variant={'gsap'}>
                    <CardHeader>
                        <Heading
                            as="h3"
                            fontSize='lg'
                            fontFamily={'josefinSlabTitle'}
                            transform={'translateY(-10px)'}
                        >
                            Associate&apos;s Degree
                        </Heading>
                    </CardHeader>
                    <CardBody py={2}>
                        <List spacing={3} lineHeight='tall'>
                            <ListItem>
                                <ListIcon as={InfoOutlineIcon} color='brand.orange' />
                                    Associate Degree in Automotive Maintenance Technology
                            </ListItem>
                            <ListItem>
                                <ListIcon as={DragHandleIcon} color='brand.orange' />
                                    Shiraz University, Shiraz, Iran
                            </ListItem>
                            <ListItem>
                                <ListIcon as={TimeIcon} color='brand.orange' />
                                    September 2004 - February 2007
                            </ListItem>
                            <ListItem>
                                <ListIcon as={StarIcon} color='brand.orange' />
                                    18 / 20 (A)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='brand.orange' />
                                    Graduated with Honours
                            </ListItem>
                        </List>
                    </CardBody>
                </Card>
            </Box>
        </Flex>

    );
}
// ============================================================

// Export Home
// ============================================================
export default Home;
// ============================================================