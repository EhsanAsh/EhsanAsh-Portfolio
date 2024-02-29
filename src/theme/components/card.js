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
        fontSmooth: 'auto',
        fontOpticalSizing: 'auto',
        fontWeight: '400',
        fontSize: ['xs', 'sm'],
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
            lineHeight: '1',
            padding: '5px',
        }
    }),
    lg: definePartsStyle({
        container: {
            borderRadius: '0',
        }
    }),
    xl: definePartsStyle({
        container: {
            borderRadius: '0',
            padding: '40px',
            lineHeight: '1.7'
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
        header: {
            borderBottom: 'solid 2px',
            borderColor: 'brand.orange',
            paddingBottom: '2px',
        }
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