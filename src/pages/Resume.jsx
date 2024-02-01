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

// Import react-icons package
// =========================================================
import { FaDownload } from 'react-icons/fa';
// =========================================================

// Import react and material UI components and styling packages
// =========================================================
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Grow } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
    width: '35%',
    height: '3rem',
    alignSelf: 'center',
});
// =========================================================

// Creating the Resume component:
// =========================================================
const Resume = () => {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMdAndUp = useMediaQuery(theme.breakpoints.up('md'));

    let variant;
    if (isXs) {
        variant = 'caption';
    } else if (isSm) {
        variant = 'body1';
    } else if (isMdAndUp) {
        variant = 'h6';
    }

    const handleClick = () => {
        const publicUrl = `${window.location.protocol}//${window.location.host}`;
        window.open(`${publicUrl}/EhsanAsh-CV.docx`);
    };

    return (

        <StyledBox>

            <Typography variant="h3" sx={{ color:'#457b9d', textAlign: 'center'}}>
                Resume
            </Typography>

            <StyledButton variant="contained" endIcon={<FaDownload />} onClick={handleClick}>
                <Typography variant={variant} noWrap>
                    Download Developer Resume
                </Typography>
            </StyledButton>

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