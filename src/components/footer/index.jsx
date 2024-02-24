// This file is the footer component for the website. It is imported into the App.js file and rendered at the bottom of the page.
// ============================================================

// Importing Copyright component
// ============================================================
import Copyright from './Copyright';
// ============================================================

// Footer component
// ============================================================
const Footer = () => {
    return (
        <div>
            <p>
                <a href="https://github.com/EhsanAsh" color="inherit">
                    {/* <GitHubIcon /> */}
                </a>
                <a href="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/" color="inherit">
                    {/* <LinkedInIcon /> */}
                </a>
                <a href="https://twitter.com/EhsanAsh_5123" color="inherit">
                    {/* <TwitterIcon /> */}
                </a>
            </p>
            <Copyright />
        </div>
    );
};
// ============================================================

// Exporting the footer component
// ============================================================
export default Footer;
// ============================================================