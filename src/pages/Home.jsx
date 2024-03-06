// Desc: This file contains the Home page component for the app.
// Used followings as a reference:
// https://gsap.com/resources/getting-started/Staggers
// https://gsap.com/resources/getting-started/Easing
// ============================================================

// Import packages
// ============================================================
import { useState, useEffect, useRef } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { gsap } from 'gsap';
// ============================================================

// Import Components and Utils
// ============================================================
import HomeInfoCard from '../components/homeInfoCard';
import HomeEduCard from '../components/homeEduCard';
import { cardData, educationData } from '../utils/homeData';
// ============================================================

// Define Home function
// ============================================================
const Home = () => {

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
            position={'relative'}
            zIndex={4}
        >
            <Box
                gap={7}
                position="relative"
                lineHeight='1.7'
                width={[400, 450, 700, 850, 950]}
                overflow={'hidden'}
            >
                <Center>
                    <HomeInfoCard
                        cardData={cardData[currentCard]}
                    />
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
                <HomeEduCard educationData={educationData} />
            </Box>
        </Flex>

    );
};
// ============================================================

// Export Home
// ============================================================
export default Home;
// ============================================================