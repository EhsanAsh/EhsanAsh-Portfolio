// Desc: This is the App component. It is the root component of the app.
// used the following repo as reference for the CssBaseline:
// (https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)
// ============================================================
// TODO: Add a Box component to the App component
// TODO: Add a Container component to the App component
// TODO: Add style
// TODO: States, Props, and Hooks

// Importing modules
// ============================================================
import { Outlet } from 'react-router-dom';
// CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// ============================================================

// Importing styles
// ============================================================
import './App.css';
// ============================================================

// Importing Theme
// ============================================================
import theme from './utils/theme.js';
// ============================================================

// Importing components
// ============================================================
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// ============================================================

// Creating the component
// ============================================================
const App = () => {
    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>

    );
};
// ============================================================

// Exporting the component
// ============================================================
export default App;
// ============================================================