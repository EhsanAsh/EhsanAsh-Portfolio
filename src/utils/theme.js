// Decs: This file is used to create a theme for the app.
// It is used in main.jsx to wrap the app in a theme provider.
// This allows us to use the theme in all components.
// This is a good place to add custom colors and other theme related things.
// Used (https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)
// as a reference for this file.
// ====================================================

// Import the createTheme function
// ====================================================
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// ====================================================

// Create a theme instance.
// ====================================================
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            paper: '#cae9ff',
            main: '#748cab',
        },
    },
    spacing: 10,
});
// ====================================================

// Export the theme
// ====================================================
export default theme;
// ====================================================
