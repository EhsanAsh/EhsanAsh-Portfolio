// This file is the header component for the app.
// It is a child component of the App component.
// It contains the navbar component and the header text.
// ============================================================

// Importing modules and css
// ============================================================
import {
    Flex,
    Spacer,
    Box,
    Container,
    Text,
    Image,
    Tabs,
    TabList,
    Tab,
    TabIndicator,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
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
            <Tabs
                position="relative"
                variant="unstyled"
                color="white"
                zIndex={10}
                fontFamily={'montserratBody'}
            >
                <TabList>
                    <Tab>
                        <ChakraLink as={ReactRouterLink} to='/'>
                            Home
                        </ChakraLink>
                    </Tab>
                    <Tab>
                        <ChakraLink as={ReactRouterLink} to='/portfolio'>
                            Portfolio
                        </ChakraLink>
                    </Tab>
                    <Tab>
                        <ChakraLink as={ReactRouterLink} to='/projects'>
                            Projects
                        </ChakraLink>
                    </Tab>
                    <Tab>
                        <ChakraLink as={ReactRouterLink} to='/contact'>
                            Contact Me
                        </ChakraLink>
                    </Tab>
                    <Tab>
                        <ChakraLink
                            as={ReactRouterLink}
                            to='https://www.linkedin.com/in/ehsan-ashrafipour-922056245/'
                            isExternal
                        >
                            LinkedIn<ExternalLinkIcon mx='2px' />
                        </ChakraLink>
                    </Tab>
                    <Tab>
                        <ChakraLink
                            as={ReactRouterLink}
                            to='https://github.com/EhsanAsh'
                            isExternal
                        >
                            GitHub<ExternalLinkIcon mx='2px' />
                        </ChakraLink>
                    </Tab>
                    <TabIndicator
                        mt="35px"
                        height="2px"
                        bg="brand.lightGreen"
                        borderRadius="2px"
                    />
                </TabList>
            </Tabs>
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