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
    },

    sizes: {
    },

    variants: {

    },
    // The default size and variant values
    defaultProps: {
        // size: 'lg',
        // variant: 'solid',
        // colorScheme: 'green',
    },
});
// ============================================================

// Export Overrides
// ============================================================
export default Button;
// ============================================================