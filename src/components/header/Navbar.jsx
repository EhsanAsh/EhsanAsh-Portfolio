// Desc: This file contains the navbar component for the app.
// It is a child component of the header component.
// ============================================================

// Importing modules
// ============================================================
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
// ============================================================

// Importing components
// ============================================================
// ============================================================

// Styling the component
// ============================================================
const Link = styled(RouterLink)`
    color: white;
    text-decoration: none;
    &:hover {
        color: #ffcc00;
    }
`;
// ============================================================

// Creating the component
// ============================================================
const Navbar = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            About
                        </Link>
                    </Typography>
                    <Button color="inherit">
                        <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                            Portfolio
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            Contact
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/resume" style={{ textDecoration: 'none' }}>
                            Resume
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
};
// ============================================================

// Exporting the component
// ============================================================
export default Navbar;
// ============================================================