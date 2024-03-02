// Desc: This file exports the NavBar component
// to be used in the Header component
// Used followings as a reference:
// https://chakra-ui.com/docs/components/tabs
// https://chakra-ui.com/docs/components/link
// ============================================================

// Importing modules
// ============================================================
import {
    Box,
    Tabs,
    TabList,
    Tab
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
// ============================================================


// The Navbar component
// ============================================================
const Navbar = ({ tabs }) => {

    return (

        <Box>
            <Tabs
                position="relative"
                variant="unstyled"
                zIndex={10}
            >
                <TabList>
                    {tabs.map((tab, index) => (

                        <Tab
                            key={index}
                            borderBottom={tab.isActive ? '1px solid' : undefined}
                            borderColor={tab.isActive ? 'brand.orange' : undefined}
                            transform={tab.isActive ? 'scale(1.2)' : undefined}
                        >

                            <ChakraLink
                                as={ReactRouterLink}
                                to={tab.route}
                                isExternal={tab.isExternal}
                                fontSize={['xs', 'xs', 'sm', 'md']}
                            >
                                {tab.name}
                                {tab.isExternal && <ExternalLinkIcon mx='2px' />}
                            </ChakraLink>

                        </Tab>

                    ))}
                </TabList>
            </Tabs>
        </Box>

    );

};
// ============================================================

// Export the Navbar component
// ============================================================
export default Navbar;
// ============================================================