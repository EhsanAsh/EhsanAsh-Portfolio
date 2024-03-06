// Desc: This file contains the input component main style
// Used the followings as a reference:
// https://chakra-ui.com/docs/components/input/theming
// ============================================================

// Import packages
// ============================================================
import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import {
    createMultiStyleConfigHelpers,
    defineStyle,
} from '@chakra-ui/styled-system';
// ============================================================

// Define multipart styles and the style config
// ============================================================
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);
// ============================================================

// default base style from the Input theme
// ============================================================
const baseStyle = definePartsStyle({
    field: {
        width: '100%',
        minWidth: 0,
        outline: 0,
        position: 'relative',
        appearance: 'none',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        _disabled: {
            opacity: 0.4,
            cursor: 'not-allowed',
        },
    },
});
// ============================================================

// define custom styles for sizes
// ============================================================
const sizes = {
    md: defineStyle({
        fontSize: 'sm',
        px: '4',
        h: '10',
        borderRadius: 'none',
    }),
};
// ============================================================

// define custom variant
// ============================================================
const variants = {
    custom: definePartsStyle({
        field: {
            border: '0px solid',
            bg: 'brand.lightBlue',
            borderTopRightRadius: 'full',
            borderBottomRightRadius: 'full',
            borderLeft: '2px solid',
            borderLeftColor: 'brand.darkBlue',
            boxShadow: '0px 3px 3px 1px #d8e2f8d2',
            mb: '10px',
            _hover: {
                bg: 'brand.lightBlueHover',
                boxShadow: 'none',
            },
            _readOnly: {
                boxShadow: 'none !important',
                userSelect: 'all',
            },
            _focusVisible: {
                bg: 'brand.lightBlueActive',
                boxShadow: 'none',
            },
        },
        addon: {
            border: '0px solid',
            borderColor: 'transparent',
            borderTopLeftRadius: 'full',
            borderBottomLeftRadius: 'full',
            bg: 'brand.lightBlue',
            color: 'white',
        },
        element: {
            bg: 'white',
            rounded: 'full',
            border: '1px solid',
            borderColor: 'gray.100',
        },
    }),
};
// ============================================================

// export the component theme
// ============================================================
export const inputTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: {
        size: 'md',
        variant: 'custom'
    },
});
// ============================================================