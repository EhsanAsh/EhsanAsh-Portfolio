// Desc: This file contains the components style overrides for containers
// Used the followings as a reference:
// https://chakra-ui.com/docs/components/container/theming
// https://chakra-ui.com/docs/styled-system/customize-theme
// ============================================================

// Import packages
// ============================================================
import { defineStyleConfig } from '@chakra-ui/react';
// ============================================================

// Define Overrides
// ============================================================
const Container = defineStyleConfig({

    baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: { base: 'center', md: 'flex-start' },
        justifyContent: 'center',
        flex: '1 0',
        height: 'auto',
        width: '100%',
        margin: '0 auto',
    },

    sizes: {
        base:{
            p: '5px',
        },
        sm: {
            p: '7px',
        },
        md: {
            p: '17px',
        },
        lg: {
            p: '20px',
        },
    },

    variants: {

        'hero': {
            fontFamily: 'josefinSlabTitle',
            fontSize: ['3xl', '4xl', '4xl', '4xl', '5xl'],
            gap: '10px',
            fontStyle: 'normal',
            fontOpticalSizing: 'auto',
            fontWeight: 500,
        },

        'portfolio': {
            fontFamily: 'josefinSlabTitle',
            fontSize: ['md', 'md', 'lg', 'lg', 'xl'],
            fontStyle: 'normal',
            fontOpticalSizing: 'auto',
            fontWeight: 400,
            bg: 'brand.lightBlue',
        },

    },

    defaultProps: {
        size: 'md',
    }

});
// ============================================================

// Export Overrides
// ============================================================
export default Container;
// ============================================================