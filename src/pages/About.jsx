// This file is for the About page, and it is a functional component. It is a simple page that displays a short description of the website and the developer. An image of the developer is also displayed. The image is a link to the developer's LinkedIn profile and displayed as a card. the image is inside the assets folder. the image and description, both are animated and they are all done using Material UI. The code for this page is shown below:
// ============================================================
// TODO: Move useStyles to hooks

// Importing React and other important libraries
// ============================================================
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
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
// import { useMediaQuery } from '@mui/material';
import { useScrollPosition } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom';
// ============================================================

// Importing images
// ============================================================
import ehsan from '../assets/image/ehsan.jpg';
// ============================================================

// Importing Material UI icons
// ============================================================
// import { ExpandMore } from '@mui/icons-material';
// ============================================================

// Functional component
// ============================================================
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    main: {
        marginTop: '100px',
        marginBottom: '100px',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    title: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    button: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    icon: {
        marginRight: '10px',
    },
    link: {
        textDecoration: 'none',
    },
}));

const About = () => {
    const classes = useStyles();
    // const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [checked, setChecked] = useState(false);
    const GROW_TIMEOUT = 1000;
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
    // const location = useLocation();
    // const history = useHistory();
    // const match = useRouteMatch('/about');

    useEffect(() => {
        setChecked(true);
    }, []);

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < -100) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    });

    return (
        <Box>
            <Container className={classes.main}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Grow in={checked} {...(checked ? { timeout: GROW_TIMEOUT } : {})}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={ehsan}
                                    title="Ehsan Ashrafipour Portfolio"
                                    alt="Author of this website"
                                />
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
                                                className={classes.icon}
                                            >
                                                {link.icon}
                                            </IconButton>
                                        </Tooltip>
                                    ))}
                                </CardActions>
                            </Card>
                        </Grow>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grow
                            in={checked}
                            {...(checked ? { timeout: 1000 } : {})}
                        >
                            <Paper elevation={3} className={classes.paper}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    className={classes.title}
                                >
                                    About
                                </Typography>
                                <Divider className={classes.divider} />
                                <Typography variant="body2" color="text.secondary">
                                    This website is a portfolio website. It is a simple website
                                    that displays the developer&apos;s projects. It is a full stack
                                    web application. It is built using React, Node.js,
                                    Express.js, and MongoDB. It is a responsive website and it
                                    is also a Progressive Web Application (PWA). It is hosted
                                    on Heroku. The code for this website is available on
                                    GitHub. The link to the GitHub repository is given below.
                                </Typography>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() => {
                                        window.open(
                                            socialLinks[0].url,
                                        );
                                    }
                                    }
                                >
                                    <GitHub className={classes.socialLinks[0].icon} />
                                      GitHub
                                </Button>
                            </Paper>
                        </Grow>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
// ============================================================

// Exporting the functional component
// ============================================================
export default About;
// ============================================================

