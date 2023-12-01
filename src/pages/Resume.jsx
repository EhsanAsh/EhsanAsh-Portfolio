// Desc: This file contains the code for the resume page. the list component is imported from src/components/resume/List.jsx and the MyDocument component is imported from src/components/resume/MyDocument.jsx. the list component is used to display the skills and the MyDocument component is used to download the resume in pdf format.
// to create a download link for the resume page I used the following resources:
// https://react-pdf.org/advanced.
// https://reactrouter.com/en/6.20.0/components/link.
// https://mui.com/material-ui/getting-started/
// =========================================================

// Import List component which is already styled
// =========================================================
import ListComponent from '../components/resume/List';
// =========================================================

// Import MyDocument component
// =========================================================
import MyDocument from '../components/resume/MyDocument';
// =========================================================

// Import react-to-pdf package
// =========================================================
import { PDFDownloadLink } from '@react-pdf/renderer';
// =========================================================

// Import react-icons package
// =========================================================
import { FaDownload } from 'react-icons/fa';
// =========================================================

// Import react-router-dom package
// =========================================================
import { Link } from 'react-router-dom';
// =========================================================

// Import react and material UI components and styling packages
// =========================================================
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Grow } from '@mui/material';
// =========================================================

// creating Styled Components
// =========================================================
const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

const StyledButton = styled(Button)({
    marginTop: '1rem',
    width: '10rem',
    height: '3rem',
    fontSize: '1.2rem',
});
// =========================================================

// Creating the Resume component:
// =========================================================
const Resume = () => {
    return (
        <StyledBox>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Resume</Typography>
            <Grow in={true} timeout={1000}>
                <ListComponent />
            </Grow>
            <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <StyledButton variant="contained" endIcon={<FaDownload />} component={Link} to="/resume">Download Developer Resume</StyledButton>)}
            </PDFDownloadLink>
        </StyledBox>
    );
};
// =========================================================

// Exporting the Resume component
// =========================================================
export default Resume;
// =========================================================