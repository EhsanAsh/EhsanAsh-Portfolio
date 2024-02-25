// This file is the header component for the app.
// It is a child component of the App component.
// It contains the navbar component and the header text.
// ============================================================

// Importing modules and css
// ============================================================
import { Flex, Spacer, Box, Button, Container, Text, Image } from '@chakra-ui/react';
import './Header.css';
// ============================================================

// Importing images
// ============================================================
import ehsan from '../../assets/image/ehsan.png';
import Hero from '../../assets/image/Hero.jpg';
// ============================================================

// Creating the component
// ============================================================

const Header = () => {

    return (

        <Flex
            direction={'column'}
            width='100%'
            minWidth='max-content'
            alignItems='center'
            justifyContent='center'
            flexShrink={0}
            px='10'
            py='20'
            gap='10'
            mb='10'
            bgImage={Hero}
            bgPosition={'center'}
        >
            <Box>
                <Button>
                    <a href="/">
                        Home
                    </a>
                </Button>
                <Button>
                    <a href="/portfolio">
                        Portfolio
                    </a>
                </Button>
                <Button>
                    <a href="/projects">
                        Projects
                    </a>
                </Button>
                <Button>
                    <a href="/contact">
                        Contact Me
                    </a>
                </Button>
                <Button>
                    <a href="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/">
                        LinkedIn
                    </a>
                </Button>
            </Box>
            <Spacer />
            <Box
                display="flex"
                justifyContent="space-evenly"
                width='100%'
                gap={['12px', '12px', '25px', '50px']}
            >
                <Box>
                    <Image
                        borderRadius='full'
                        boxSize={{ base: '150px', md: '200px', xl: '250px'}}
                        src={ehsan}
                        alt='Ehsan Ashrafipour'
                        fallbackSrc='https://via.placeholder.com/150'
                        loading='lazy'
                        border='5px solid #9a031f79'
                        boxShadow='6px 6px 17px #abb1c294, -6px -6px 17px #5d0e0262'
                        mb='50px'
                    />
                </Box>
                <Container variant={'hero'} lineHeight={'2'} gap={0}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                        gap={'0'}
                        lineHeight={'1.2'}
                    >
                        <Text as={'h2'}>Ehsan Ashrafipour</Text>
                        <Text
                            as={'h3'}
                            fontSize={['xs', 'sm', 'md', 'xl', '2xl']}
                            fontWeight={'400'}
                        >
                            BEng Mechanical Engineering
                        </Text>
                    </Box>
                    <div className='wrapper'>
                        <svg>
                            <text
                                x="45%"
                                y="50%"
                                // dy=".35em"
                                textAnchor="middle"
                            >
                                Full-stack Application Developer
                            </text>
                        </svg>
                    </div>
                </Container>
            </Box>
        </Flex>

    );

};
// ============================================================

// Exporting the component
// ============================================================
export default Header;
// ============================================================