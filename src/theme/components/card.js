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
        paddingBottom: '9px',
    },
    body: {
        fontSmooth: 'auto',
        fontOpticalSizing: 'auto',
        fontWeight: '400',
        fontSize: ['xs', 'sm'],
    },

});
// ============================================================

// define custom styles for sizes
// ============================================================
const sizes = {

    sm: definePartsStyle({
        container: {
            borderRadius: '20px',
            p: '20px',
            width: '100%',
            maxWidth: '450px',
            minWidth: '300px',
            height: '100%',
        }
    }),
    md: definePartsStyle({
        container: {
            borderRadius: '0',
            lineHeight: '2',
            padding: '5px',
            ml: '20px',
            width: '100%',
            maxWidth: '600px',
            minWidth: '250px',
        },
        header: {
            paddingBottom: '10px',
        },
        body: {
            px: '10px',
        }
    }),
    lg: definePartsStyle({
        container: {
            borderRadius: '0',
            paddingLeft: '20px',
            marginBottom: '20px',
            lineHeight: '1.2'
        }
    }),
    xl: definePartsStyle({
        container: {
            borderRadius: '0',
            padding: '40px',
            lineHeight: '1.7'
        },
        footer: {
            paddingTop: '4px'
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
        }
    }),
    gsap: definePartsStyle({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'space-evenly',
            alignContent: 'center',
            alignSelf: 'center',
            color: 'brand.darkBlue',
            border: 'none',
        },
        header: {
            borderColor: 'brand.darkBlue',
            borderStart: 'solid 2px',
        },
        body: {
            fontSize: 'xs',
            fontWeight: '500',
        }
    }),
    contact: definePartsStyle({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'space-evenly',
            bg: 'brand.lightBlue',
        },
        header: {
            borderBottom: 'solid 2px',
            borderBottomColor: 'brand.darkBlue',
            color: 'brand.darkBlue',
        },
        body: {
            fontSize:'md',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems:'flex-start',
        }
    }),
    skills: definePartsStyle({
        container: {
            alignSelf: 'center',
            border: 'none',
            bg: 'linear-gradient(180deg, rgba(171,214,236,0.63) 0%, rgba(201,238,230,0.65) 50%, rgba(251,199,127,0.66) 100%)',
            boxShadow: '0px 2px 5px 3px #d8e2f8d2',
        }
    }),
    links: definePartsStyle({
        container: {
            alignSelf: 'flex-end',
            border: 'none',
            bg: 'linear-gradient(270deg, rgba(171,214,236,0.63) 0%, rgba(201,238,230,0.65) 50%, rgba(251,199,127,0.66) 100%)',
            boxShadow: '0px 2px 5px 3px #d8e2f8d2',
        },
        body: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            alignSelf: 'stretch',
            gap: '20px',
        }
    }),
    projects: definePartsStyle({
        container: {
            border: 'none',
            bg: 'brand.grayProjectCard',
            boxShadow: '0px 2px 5px 3px #d8e2f8d2',
            pt: '0px',
            pb: '20px',
        },
        body: {
            mb: '10px',
            borderBottom: 'solid 2px',
            borderColor: 'brand.orange',
        },
        footer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'stretch',
            my: '10px',
        }
    }),
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