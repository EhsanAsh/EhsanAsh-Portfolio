// This file is the header component for the app.
// It is a child component of the App component.
// It contains the navbar component and the header text.
// ============================================================

// Importing modules
// ============================================================
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// ============================================================

// Importing components
// ============================================================
import Navbar from './Navbar';
// ============================================================

// Styling the component
// ============================================================
const HeaderBox = styled(Box)({
    backgroundColor: '#f0ebd8',
    color: '#457b9d',
    padding: '1rem',
});
// ============================================================

// Creating the component
// ============================================================

const Header = () => {
    return (
        <HeaderBox>
            <Typography variant="h3" component="div" align="center">
                Ehsan Ashrafipour
            </Typography>
            <Typography variant="h5" component="div" align="center">
                Full Stack Web Developer
            </Typography>
            <Navbar />
        </HeaderBox>
    );
};
// ============================================================

// Exporting the component
// ============================================================
export default Header;
// ============================================================