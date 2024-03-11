// Desc: This file exports the HeaderMenu component
// to be used in the Header component
// Used followings as a reference:
// https://chakra-ui.com/docs/components/menu
// https://chakra-ui.com/docs/components/link
// ============================================================

// Importing modules
// ============================================================
import {
    Box,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
// ============================================================

// Define the HeaderMenu component
// ============================================================
const HeaderMenu = ({ menuItems }) => {

    return (

        <Box>
            <Menu>

                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant="outline"
                    _focus={{ transform: 'scale(1.2)' }}
                    _hover={{ transform: 'translateY(-5px)' }}
                    border={'2px solid'}
                    borderColor={'brand.darkBlue'}
                />

                <MenuList
                    bg='brand.darkBlue'
                    fontSize='sm'
                    fontWeight={'500'}
                    borderColor={'whiteAlpha.800'}
                    mr={20}
                >

                    {menuItems.map(item => {
                        // Check if the link is external
                        if (item.isExternal) {

                            return(
                                <MenuItem
                                    as="a"
                                    href={item.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={item.label}
                                    icon={item.isExternal ? <ExternalLinkIcon /> : null}
                                    _hover={{ color: 'brand.orange' }}
                                    backgroundColor={'whiteAlpha.800'}
                                >
                                    {item.label}
                                </MenuItem>
                            );

                        } else {

                            return (
                                <MenuItem
                                    as={ReactRouterLink}
                                    to={item.to}
                                    key={item.label}
                                    _hover={{ color: 'brand.orange' }}
                                    backgroundColor={'whiteAlpha.800'}
                                >
                                    {item.label}
                                </MenuItem>
                            );

                        }
                    })}

                </MenuList>
            </Menu>
        </Box>

    );

};
// ============================================================

// Export the HeaderMenu component
// ============================================================
export default HeaderMenu;
// ============================================================
