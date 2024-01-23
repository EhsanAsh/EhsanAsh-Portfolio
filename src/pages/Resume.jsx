/* eslint-disable no-unused-vars */
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
import { useNavigate } from 'react-router-dom';
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
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: theme.palette.background.main,
    marginTop: '1rem',
    marginBottom: '1rem',
}));

const StyledButton = styled(Button)({
    marginTop: '1rem',
    width: '30%',
    height: '3rem',
    fontSize: '1.2rem',
});
// =========================================================

// Creating the Resume component:
// =========================================================
const Resume = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/resume');
    };

    return (

        <StyledBox>
            <Typography variant="h3" sx={{ color:'#457b9d', textAlign: 'center'}}>
                Resume
            </Typography>
            <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : (
                        <StyledButton variant="contained" endIcon={<FaDownload />} onClick={handleClick}>
                            <Typography variant={{ xs: 'caption', sm: 'body1', md: 'h6' }} noWrap>
                                Download Developer Resume
                            </Typography>
                        </StyledButton>
                    )
                }
            </PDFDownloadLink>
            <Grow in={true} timeout={1000}>
                <div>
                    <ListComponent />
                </div>
            </Grow>
        </StyledBox>

    );
};
// =========================================================

// Exporting the Resume component
// =========================================================
export default Resume;
// =========================================================