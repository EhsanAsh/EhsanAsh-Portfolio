// Desc: This file contains the components style overrides for cards
// Used the followings as a reference:
// https://chakra-ui.com/docs/styled-system/component-style
// https://chakra-ui.com/docs/styled-system/customize-theme
// https://chakra-ui.com/docs/components/card/theming
// ============================================================

// Import packages
// ============================================================
import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers} from '@chakra-ui/react';
// ============================================================

// Deconstruct the parts of the card
// ============================================================
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);
// ============================================================

// define the base component styles
// ============================================================
const baseStyle = definePartsStyle({

    container: {
        backgroundColor: '#e5e5e56b',
    },
    header: {
        paddingBottom: '2px',
    },
    body: {
        paddingTop: '2px',
        fontSmooth: 'auto',
        fontOpticalSizing: 'auto',
        fontWeight: '400',
        fontSize: 'xs',
    },
    footer: {
        paddingTop: '4px'
    }
});
// ============================================================

// define custom styles for sizes
// ============================================================
const sizes = {
    md: definePartsStyle({
        container: {
            borderRadius: '0',
            padding: '20px',
        }
    }),
    xl: definePartsStyle({
        container: {
            borderRadius: '0',
            padding: '40px',
        }
    })
};
// ============================================================

// define custom variant
// ============================================================
const variants = {
    basic: definePartsStyle({
        container: {
            color: 'brand.darkBlue',
            border: 'none'
        },
    })
};
// ============================================================

// export the component theme
// ============================================================
export const cardTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: {
        size: 'xl',
        variant: 'basic'
    },
});
// ============================================================