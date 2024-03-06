// Desc: This file contains the Component style
// overrides for the Button component
// Used the followings as a reference:
// https://chakra-ui.com/docs/styled-system/component-style
// https://chakra-ui.com/docs/styled-system/customize-theme
// ============================================================

// Import packages
// ============================================================
import { defineStyleConfig } from '@chakra-ui/react';
// ============================================================

// Define Overrides
// ============================================================
const Button = defineStyleConfig({

    baseStyle: {
        borderRadius: 0,
        _hover: { color: 'brand.lightGreen' },
    },

    sizes: {
        md: {
            fontSize: ['16px', '16px', '18px'],
            padding: '15px',
        },
    },

    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'brand.orange',
            color: 'brand.orange',
            _hover: { bg: 'brand.orange', color: 'brand.darkBlue' },
        },
        outlineDark: {
            borderLeft: '2px solid',
            borderLeftColor: 'brand.darkBlue',
            bg: 'brand.lightBlue',
            borderTopRightRadius: 'full',
            borderBottomRightRadius: 'full',
            color: 'brand.darkBlue',
            boxShadow: '0px 3px 5px 2px #d8e2f8d2',
            _hover: {
                bg: 'brand.darkBlue',
                color: 'brand.lightGray',
                boxShadow: 'none',
            },
        },
        socialMediaOrange: {
            border: 'none',
            color: 'brand.orange',
            _hover: { color: 'brand.darkBlue' },
            transition: 'all 0.2s',
            gap: 5,
        },
        socialMediaDark: {
            border: 'none',
            color: 'brand.darkBlue',
            _hover: { color: 'brand.orange', transform: 'translateY(-5px)' },
        },
        socialMediaContact: {
            border: 'none',
            color: 'brand.darkBlue',
            padding: 0,
            fontWeight: 400,
            _hover: { color: 'brand.orange', transform: 'translateY(-5px)' },
        },
        solid: {
            bg: 'brand.orange',
            color: 'brand.darkBlue',
            _hover: { bg: 'brand.darkBlue', color: 'brand.orange' },
        },
        ghost: {
            bg: 'transparent',
            color: 'brand.orange',
            _hover: { bg: 'brand.orange', color: 'brand.darkBlue' },
        },

    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'outline',
        colorScheme: 'orange',
    },
});
// ============================================================

// Export Overrides
// ============================================================
export default Button;
// ============================================================