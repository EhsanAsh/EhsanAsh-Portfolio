// Desc: Thi is the Error page component which will be displayed
// when the user navigates to a non - existent page or when an error occurs.
// used (https://mui.com/material-ui/react-typography/) as reference.
// ============================================================

// Importing modules
// ============================================================
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// ============================================================

// Creating the Error component
// ============================================================

const Error = ({ message }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Error
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {message}
                </Typography>
                <Typography variant="body1">
                    <Link to="/">Return to the homepage</Link>
                </Typography>
            </Container>
        </Box>
    );
};
// ============================================================

// Exporting the Error component
// ============================================================
export default Error;
// ============================================================