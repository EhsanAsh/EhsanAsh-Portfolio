// This file is the footer component for the website. It is imported into the App.js file and rendered at the bottom of the page.
// ============================================================

// Importing packages
// ============================================================
import {
    Flex,
    Spacer,
    Box,
    IconButton,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
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
            justifyContent='center'
            alignSelf='stretch'
            flexShrink={0}
            px='3'
            py='1'
            bg='brand.footer'
            color='brand.lightGray'
            position= 'fixed'
            left= '0'
            bottom= '0'
        >
            <Box p={4}>
                <Copyright />
            </Box>
            <Spacer />
            <Box
                display="flex"
                justifyContent={'space-evenly'}
                alignItems="center"
                p={2}
                gap={2}
            >
                <ChakraLink
                    as={ReactRouterLink}
                    to="https://github.com/EhsanAsh"
                    isExternal
                >
                    <IconButton
                        aria-label="Github"
                        icon={<FaGithub />}
                        size="xs"
                        colorScheme="white"
                        variant="outline"
                        border="none"
                        _hover={{
                            transform: 'translateY(-5px)',
                        }}
                        transition="all 0.2s"
                    />
                </ChakraLink>
                <ChakraLink
                    as={ReactRouterLink}
                    to="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/"
                    isExternal
                >
                    <IconButton
                        aria-label="LinkedIn"
                        icon={<FaLinkedin />}
                        colorScheme="white"
                        size="xs"
                        variant="outline"
                        border="none"
                        _hover={{
                            transform: 'translateY(-5px)',
                        }}
                        transition="all 0.2s"
                    />
                </ChakraLink>
                <ChakraLink
                    as={ReactRouterLink}
                    to="https://twitter.com/EhsanAsh_5123"
                    isExternal
                >
                    <IconButton
                        aria-label="Twitter"
                        icon={<FaTwitterSquare />}
                        colorScheme="white"
                        size="xs"
                        variant="outline"
                        border="none"
                        _hover={{
                            transform: 'translateY(-5px)',
                        }}
                        transition="all 0.2s"
                    />
                </ChakraLink>
            </Box>
        </Flex>
    );
};
// ============================================================

// Exporting the footer component
// ============================================================
export default Footer;
// ============================================================