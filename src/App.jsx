// Desc: This is the App component. It is the root component of the app.
// ============================================================
// TODO: Add a Box component to the App component
// TODO: Add a Container component to the App component
// TODO: Add style
// TODO: States, Props, and Hooks

// Importing modules
// ============================================================
import { Outlet } from 'react-router-dom';
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
            <Outlet />
            <Footer />
        </>

    );
};
// ============================================================

// Exporting the component
// ============================================================
export default App;
// ============================================================