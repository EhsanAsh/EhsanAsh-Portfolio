// This file is the footer component for the website. It is imported into the App.js file and rendered at the bottom of the page. It is a simple component that displays the Copyright component and a link to my GitHub page and LinkedIn. I'm styling it to fit a dark theme.also using Material UI icons.
// ============================================================

// Importing Material UI components
// ============================================================
import { makeStyles } from '@mui/system';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
// ============================================================

// Importing Copyright component
// ============================================================
import CopyRight from './CopyRight';
// ============================================================

// Styling for the footer component
// ============================================================
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
// ============================================================

// Footer component
// ============================================================
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                <Link href="" color="inherit">
                    <GitHubIcon />
                </Link>
                <Link href="" color="inherit">
                    <LinkedInIcon />
                </Link>
            </Typography>
            <CopyRight />
        </footer>
    );
};
// ============================================================

// Exporting the footer component
// ============================================================
export default Footer;
// ============================================================