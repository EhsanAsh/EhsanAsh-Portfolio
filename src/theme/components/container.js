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
        alignItems: 'flex-start',
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
            p: '10px',
        },
        lg: {
            p: '13px',
        },
    },

    variants: {

        'hero': {
            fontFamily: 'josefinSlabTitle',
            fontSize: ['xl', 'xl', '3xl', '4xl', '5xl'],
            gap: '10px',
            fontStyle: 'normal',
            fontOpticalSizing: 'auto',
            fontWeight: 500,
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