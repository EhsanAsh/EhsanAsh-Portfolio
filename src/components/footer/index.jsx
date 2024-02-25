// This file is the footer component for the website. It is imported into the App.js file and rendered at the bottom of the page.
// ============================================================

// Importing packages
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
// ============================================================

// Importing Copyright component
// ============================================================
import Copyright from './Copyright';
// ============================================================

// Footer component
// ============================================================
const Footer = () => {
    return (
        <Flex
            direction={'row'}
            width='100%'
            minWidth='max-content'
            height={'auto'}
            alignItems='center'
            justifyContent='flex-start'
            alignSelf='stretch'
            flexShrink={0}
            px='10'
            py='5'
            bg='brand.footer'
            color='brand.lightGray'
        >
            <p>
                <a href="https://github.com/EhsanAsh" color="inherit">
                    {/* <GitHubIcon /> */}
                </a>
                <a href="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/" color="inherit">
                    {/* <LinkedInIcon /> */}
                </a>
                <a href="https://twitter.com/EhsanAsh_5123" color="inherit">
                    {/* <TwitterIcon /> */}
                </a>
            </p>
            <Copyright />
        </Flex>
    );
};
// ============================================================

// Exporting the footer component
// ============================================================
export default Footer;
// ============================================================