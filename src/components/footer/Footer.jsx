// This file is the footer component for the website. It is imported into the App.js file and rendered at the bottom of the page. It is a simple component that displays the Copyright component and a link to my GitHub page and LinkedIn. I'm styling it to fit a dark theme.also using Material UI icons.
// ============================================================
// TODO: Check styling and theme

// Importing Material UI components
// ============================================================
import {styled} from '@mui/system';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';
// ============================================================

// Importing Copyright component
// ============================================================
import Copyright from './Copyright';
// ============================================================
// ============================================================

// Styling for the footer component
// ============================================================
const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
}));
// ============================================================

// Footer component
// ============================================================
const Footer = () => {
    return (
        <FooterContainer>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                <Link href="https://github.com/EhsanAsh" color="inherit">
                    <GitHubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/" color="inherit">
                    <LinkedInIcon />
                </Link>
                <Link href="https://twitter.com/EhsanAsh_5123" color="inherit">
                    <TwitterIcon />
                </Link>
            </Typography>
            <Copyright />
        </FooterContainer>
    );
};
// ============================================================

// Exporting the footer component
// ============================================================
export default Footer;
// ============================================================