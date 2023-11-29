// This file is for the About page, and it is a functional component. It is a simple page that displays a short description of the website and the developer. An image of the developer is also displayed. The image is a link to the developer's LinkedIn profile and displayed as a card.
// ============================================================
// TODO: remove unused stuff
// TODO: move style to another file
// TODO: modify theme in the theme file
// TODO: modify mediaStyled and Avatar

// Importing images
// ============================================================
import ehsan from '../assets/image/ehsan.jpg';
// ============================================================

// Importing React and other important libraries
// ============================================================
import { styled } from '@mui/system';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
// import { Avatar } from '@mui/material';
import { Icon } from '@mui/material';
import { Grow } from '@mui/material';
import { Paper } from '@mui/material';
import { Divider } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link as MuiLink } from '@mui/material';
// ============================================================

// Creating Styled Components
// ============================================================
const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
}));

const Main = styled('div')({
    marginTop: '100px',
    marginBottom: '100px',
});

const StyledCard = styled(Card)({
    maxWidth: 345,
});

const StyledMedia = styled(CardMedia)({
    height: 300,
});

// const StyledAvatar = styled(Avatar)(({ theme }) => ({
//     width: theme.spacing(20),
//     height: theme.spacing(30),
// }));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StyledDivider = styled(Divider)({
    marginTop: '20px',
    marginBottom: '20px',
});

const Title = styled(Typography)({
    marginTop: '20px',
    marginBottom: '20px',
});

const StyledButton = styled(Button)({
    marginTop: '20px',
    marginBottom: '20px',
});

const StyledIcon = styled(Icon)({
    marginRight: '10px',
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
});
// ============================================================

// Functional component
// ============================================================
const About = () => {
    // const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [checked, setChecked] = useState(false);
    const GROW_TIMEOUT = 1000;
    useEffect(() => {
        setChecked(true);
    }, []);
    // const { y } = useScroll();
    // Show a back to top button when the user has scrolled down 100px or more
    // const [showBackToTop, setShowBackToTop] = useState(false);

    // useEffect(() => {
    //     if (y > 100) {
    //         setShowBackToTop(true);
    //     } else {
    //         setShowBackToTop(false);
    //     }
    // }, [y]);
    const socialLinks = [
        {
            name: 'Github',
            url: 'https://github.com/EhsanAsh',
            icon: <GitHub />,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ehsan-ashrafipour-922056245/',
            icon: <LinkedIn />,
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/EhsanAsh_5123',
            icon: <Twitter />,
        },
    ];

    return (
        <Root>
            <Main>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Grow in={checked} {...(checked ? { timeout: GROW_TIMEOUT } : {})}>
                            <StyledCard>
                                <MuiLink href="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/" target="_blank">
                                    <StyledMedia
                                        image={ehsan}
                                        title="Click to view my LinkedIn profile"
                                        alt="Author of this website"
                                    />
                                </MuiLink>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ehsan Ashrafipour
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        I am a full stack web developer. I have experience in
                                        developing web applications using React, Node.js, Express.js,
                                        MongoDB, and MySQL. I also have experience in developing
                                        mobile applications using React Native. I am also familiar
                                        with Python and Java.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {socialLinks.map((link) => (
                                        <Tooltip title={link.name} key={link.name}>
                                            <IconButton
                                                onClick={() => window.open(link.url)}
                                            >
                                                <StyledIcon>{link.icon}</StyledIcon>
                                            </IconButton>
                                        </Tooltip>
                                    ))}
                                </CardActions>
                            </StyledCard>
                        </Grow>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grow
                            in={checked}
                            {...(checked ? { timeout: 1000 } : {})}
                        >
                            <StyledPaper elevation={3}>
                                <Title
                                    variant="h4"
                                    component="div"
                                >
                                    About
                                </Title>
                                <StyledDivider />
                                <Typography variant="body2" color="text.secondary">
                                    This website is a portfolio website. It is a simple website
                                    that displays the developer&apos;s projects. It is a full stack
                                    web application. It is built using React, Node.js,
                                    Express.js, and MongoDB. It is a responsive website and it
                                    is also a Progressive Web Application (PWA). It is hosted
                                    on Heroku. The code for this website is available on
                                    GitHub. The link to the GitHub repository is given below.
                                </Typography>
                                <StyledLink href={socialLinks[0].url} target="_blank">
                                    <StyledButton variant="contained">
                                        <GitHub />
                                            GitHub
                                    </StyledButton>
                                </StyledLink>
                            </StyledPaper>
                        </Grow>
                    </Grid>
                </Grid>
                {/* {showBackToTop && (
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Back to top
                    </button>
                )} */}
            </Main>
        </Root>
    );

};
// ============================================================

// Exporting the functional component
// ============================================================
export default About;
// ============================================================

