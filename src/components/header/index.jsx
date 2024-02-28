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
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
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

    const location = useLocation();
    const isHome = location.pathname === '/';
    const isPortfolio = location.pathname === '/portfolio';
    const isProjects = location.pathname === '/projects';
    const isContact = location.pathname === '/contact';

    return (

        <Flex
            direction={'column'}
            width='100%'
            alignItems='center'
            justifyContent='center'
            flexShrink={0}
            px='10'
            py='12'
            gap='8'
            bgImage={Hero}
            bgPosition='center'
        >
            <Tabs
                position="relative"
                variant="unstyled"
                zIndex={10}
            >
                <TabList>
                    <Tab
                        borderBottom={isHome ? '1px solid' : undefined}
                        borderColor={isHome ? 'brand.orange' : undefined}
                        transform={isHome ? 'scale(1.2)' : undefined}
                    >
                        <ChakraLink
                            as={ReactRouterLink}
                            to='/'
                            fontSize={['xs', 'xs', 'sm', 'md']}
                        >
                            Home
                        </ChakraLink>
                    </Tab>
                    <Tab
                        borderBottom={isPortfolio ? '1px solid' : undefined}
                        borderColor={isPortfolio ? 'brand.orange' : undefined}
                        transform={isPortfolio ? 'scale(1.2)' : undefined}
                    >
                        <ChakraLink
                            as={ReactRouterLink}
                            to='/portfolio'
                            fontSize={['xs', 'xs', 'sm', 'md']}
                        >
                            Portfolio
                        </ChakraLink>
                    </Tab>
                    <Tab
                        borderBottom={isProjects ? '1px solid' : undefined}
                        borderColor={isProjects ? 'brand.orange' : undefined}
                        transform={isProjects ? 'scale(1.2)' : undefined}
                    >
                        <ChakraLink
                            as={ReactRouterLink}
                            to='/projects'
                            fontSize={['xs', 'xs', 'sm', 'md']}
                        >
                            Projects
                        </ChakraLink>
                    </Tab>
                    <Tab
                        borderBottom={isContact ? '1px solid' : undefined}
                        borderColor={isContact ? 'brand.orange' : undefined}
                        transform={isContact ? 'scale(1.2)' : undefined}
                    >
                        <ChakraLink
                            as={ReactRouterLink}
                            to='/contact'
                            fontSize={['xs', 'xs', 'sm', 'md']}
                        >
                            Contact Me
                        </ChakraLink>
                    </Tab>
                    <Tab>
                        <ChakraLink
                            as={ReactRouterLink}
                            to='https://www.linkedin.com/in/ehsan-ashrafipour-922056245/'
                            isExternal
                            fontSize={['xs', 'xs', 'sm', 'md']}
                        >
                            LinkedIn<ExternalLinkIcon mx='2px' />
                        </ChakraLink>
                    </Tab>
                    <Tab>
                        <ChakraLink
                            as={ReactRouterLink}
                            to='https://github.com/EhsanAsh'
                            isExternal
                            fontSize={['xs', 'xs', 'sm', 'md']}
                        >
                            GitHub<ExternalLinkIcon mx='2px' />
                        </ChakraLink>
                    </Tab>
                </TabList>
            </Tabs>
            <Spacer />
            <Box
                display="flex"
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                alignItems={{ base: 'center', md: 'flex-start' }}
                width='100%'
                gap={['12px', '12px', '25px']}
                p='5px'
            >
                <Box>
                    <Image
                        borderRadius='full'
                        boxSize={{ base: '200px', xl: '250px'}}
                        src={ehsan}
                        alt='Ehsan Ashrafipour'
                        fallbackSrc='https://via.placeholder.com/150'
                        loading='lazy'
                        border='5px solid #fca311'
                        boxShadow='6px 6px 17px #14213d66, -6px -6px 17px #14213d66'
                        objectFit='cover'
                        objectPosition='center'
                    />
                </Box>
                <Container variant={'hero'} lineHeight={'2'} gap={0}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={{ base: 'center', md: 'flex-start' }}
                        gap={'0'}
                        lineHeight={'1.2'}
                    >
                        <Text as={'h2'}>Ehsan Ashrafipour</Text>
                        <Text
                            as={'h3'}
                            fontSize={['lg', 'xl', 'xl', 'xl', '2xl']}
                            fontWeight={'500'}
                        >
                            BEng Mechanical Engineering
                        </Text>
                    </Box>
                    <div className='wrapper'>
                        <svg>
                            <text
                                x="50%"
                                y="45%"
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