// Desc: This file acts as the main hub and
// theme configuration file of the application
// Used the following as a reference:
// https://chakra-ui.com/docs/styled-system/customize-theme
// https://chakra-ui.com/docs/styled-system/theme
// ============================================================

// Import Style Overrides
// ============================================================
import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
// Foundational style overrides
import borders from './foundations/borders';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
// Component style overrides
import Button from './components/button';
import { inputTheme } from './components/input';
import { cardTheme } from './components/card';
import Container from './components/container';
// ============================================================

// Define Overrides and configs for changing the color mode
// ============================================================
const overrides = {
    styles,
    borders,
    colors,
    fonts,
    // Other foundational style overrides go here
    components: {
        Button,
        Input: inputTheme,
        Card: cardTheme,
        Container,
    },
};
// ============================================================

// Export Overrides
// ============================================================
export default extendTheme(overrides);
// ============================================================