// This file is for the About page, and it is a functional component. It is a simple page that displays a short description of the website and the developer. An image of the developer is also displayed. The image is a link to the developer's LinkedIn profile and displayed as a card.
// ============================================================

// Importing images
// ============================================================
import ehsan from '../assets/image/ehsan.png';
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
    backgroundColor: theme.palette.background.main,
}));

const Main = styled('div')({
    marginTop: '2.5rem',
    marginBottom: '1rem',
});

const StyledCard = styled(Card)({
    maxWidth: 345,
    margin: '1.5rem',
});

const StyledMedia = styled(CardMedia)(({theme}) => ({
    width: theme.spacing(35),
    height: theme.spacing(30),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '1.5rem',
}));

const StyledDivider = styled(Divider)({
    marginTop: '1rem',
    marginBottom: '1rem',
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
    marginRight: '.3rem',
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
                                    <Typography variant="body2" color="text.secondary" textAlign={'left'}>
                                    An innovative and passionate Full-Stack Developer, recently graduated from the University of Toronto with a remarkable graduation score of 96.07 (A). I bring a rich and diverse background, combining over 10 years of experience in sales and marketing in the home and kitchen appliance sector, along with a recent but intensive journey into full-stack development. Known for an indescribable enthusiasm for coding, I am a self-proclaimed hard worker, fast learner, goal-oriented, and a collaborative team member. My career is punctuated by a childhood dream to become a programmer and application developer, a dream that I have pursued with relentless dedication. I thrive in environments that require creativity and problem-solving, always eager to develop innovative solutions that positively impact people&apos;s lives and the environment. My technical proficiency spans across various languages and frameworks, with a particular comfort in MERN stack technologies and a propensity for writing logical codes over styling and designing.
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
                                <Typography variant="body2" color="text.secondary" textAlign={'left'}>
                                Welcome to my React portfolio! This single-page application portfolio is designed for employers like you who are looking for candidates with experience building single-page applications. You can use this portfolio to view my work samples and assess whether I am a good fit for your open position.
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
            </Main>
        </Root>
    );

};
// ============================================================

// Exporting the functional component
// ============================================================
export default About;
// ============================================================

