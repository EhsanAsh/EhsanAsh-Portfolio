// Desc: This file contains the input component main style
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
const Input = defineStyleConfig({

    baseStyle: {},

    sizes: {},

    variants: {
        outline: (props) => ({
            field: {
            },
        }),
        filled: (props) => ({
            field: {
            },
        }),
    },

    defaultProps: {},

});
// ============================================================

// Export Overrides
// ============================================================
export default Input;
// ============================================================