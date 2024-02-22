// Desc: This is the App component. It is the root component of the app.
// used the following repo as reference for the CssBaseline:
// (https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)
// ============================================================

// Importing modules
// ============================================================
import { Outlet } from 'react-router-dom';
// ============================================================

// Importing styles
// ============================================================
import './App.css';
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
        <>
            <Header />
            <Outlet className="page" />
            <Footer />
        </>
    );
};
// ============================================================

// Exporting the component
// ============================================================
export default App;
// ============================================================