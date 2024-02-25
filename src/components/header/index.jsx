// This file is the header component for the app.
// It is a child component of the App component.
// It contains the navbar component and the header text.
// ============================================================

// Importing modules
// ============================================================
import { Flex, Spacer, Box, Button, Container, Text, Image } from '@chakra-ui/react';
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
                alignItems="center"
                justifyContent="space-evenly"
                gap={['10px', '10px', '20px', '25px']}
            >
                <Box>
                    <Image
                        borderRadius='full'
                        boxSize={{ base: '150px', md: '200px', xl: '250px'}}
                        src={ehsan}
                        alt='Ehsan Ashrafipour'
                        fallbackSrc='https://via.placeholder.com/150'
                        loading='lazy'
                        border='5px solid #9AA61A'
                        boxShadow='0 0 4px 2px #3f450333'
                    />
                </Box>
                <Container variant={'hero'} lineHeight={'2'} gap={['3px', '3px', '5px']}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={'0'}
                        lineHeight={'1.2'}
                    >
                        <Text as={'h2'}>Ehsan Ashrafipour</Text>
                        <Text
                            as={'h3'}
                            fontSize={['xs', 'sm', 'md', 'xl', '2xl']}
                            fontWeight={'400'}
                            color='brand.lightGreen'
                        >
                        BEng Mechanical Engineering
                        </Text>
                    </Box>
                    <Text as={'h2'}>Full-stack Application Developer</Text>
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