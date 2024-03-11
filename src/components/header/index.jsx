// This file is the header component for the app.
// It is a child component of the App component.
// It contains the navbar component and the
// header menu and the info container.
// ============================================================

// Importing modules and css
// ============================================================
import {
    Flex,
    Spacer,
    Box,
    Image,
    useMediaQuery,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import './Header.css';
// ============================================================

// Importing images and child components
// ============================================================
import ehsan from '../../assets/image/ehsan.png';
import Hero from '../../assets/image/Hero.jpg';
import Navbar from './Navbar.jsx';
import HeaderMenu from './HeaderMenu.jsx';
import InfoContainer from './InfoContainer.jsx';
// ============================================================

// Creating the component
// ============================================================

const Header = () => {

    const location = useLocation();

    // Define the media query to check the screen size
    const [isLargerThan685] = useMediaQuery('(min-width: 686px)');

    const isHome = location.pathname === '/';
    const isPortfolio = location.pathname === '/portfolio';
    const isProjects = location.pathname === '/projects';
    const isContact = location.pathname === '/contact';

    // Define the tabs to be passed to the Navbar component
    const tabs = [
        { name: 'Home', route: '/', isActive: isHome },
        { name: 'Portfolio', route: '/portfolio', isActive: isPortfolio },
        { name: 'Projects', route: '/projects', isActive: isProjects },
        { name: 'Contact Me', route: '/contact', isActive: isContact },
        { name: 'LinkedIn', route: 'https://www.linkedin.com/in/ehsan-ashrafipour-922056245/', isExternal: true },
        { name: 'GitHub', route: 'https://github.com/EhsanAsh', isExternal: true }
    ];

    // Define the menu items to be used in render Menu function
    const menuItems = [
        { to: '/', label: 'Home', isActive: isHome },
        { to: '/portfolio', label: 'Portfolio', isActive: isPortfolio },
        { to: '/projects', label: 'Projects', isActive: isProjects },
        { to: '/contact', label: 'Contact Me', isActive: isContact },
        {
            to: 'https://www.linkedin.com/in/ehsan-ashrafipour-922056245/',
            label: 'LinkedIn',
            isExternal: true
        },
        { to: 'https://github.com/EhsanAsh', label: 'GitHub', isExternal: true },
    ];

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
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPosition='center'
            position={'relative'}
            zIndex={3}
        >

            {/* Render Menu or Tabs based on screen size */}
            {isLargerThan685 ?
                <Navbar tabs={tabs}/> :
                <HeaderMenu menuItems={menuItems} />
            }
            {/* Render Menu or Tabs based on screen size */}

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

                <InfoContainer />

            </Box>
        </Flex>

    );

};
// ============================================================

// Exporting the component
// ============================================================
export default Header;
// ============================================================