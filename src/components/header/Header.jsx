// This file is the header component for the app.
// It is a child component of the App component.
// It contains the navbar component and the header text.
// ============================================================

// Importing modules
// ============================================================

// ============================================================

// Importing components
// ============================================================
import Navbar from './Navbar';
// ============================================================

// Styling the component
// ============================================================
// ============================================================

// Creating the component
// ============================================================

const Header = () => {
    return (
        <div>
            <p>
                Ehsan Ashrafipour
            </p>
            <p>
                Full Stack Web Developer
            </p>
            <Navbar />
        </div>
    );
};
// ============================================================

// Exporting the component
// ============================================================
export default Header;
// ============================================================