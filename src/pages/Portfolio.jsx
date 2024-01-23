// Desc: This is the Portfolio page of the website where the user
// can view the projects I have worked on.there will be six projects
// all with a description, a link to the deployed application, and a
// link to the GitHub repository and a picture of that project which
// will be clickable.all cards should animated when the page loads
// using material ui framework.also useState and useEffect hooks will
// be used to set the state of the projects and to render them to the page.
// ===============================================================

// Importing all necessary packages
// ===============================================================
import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
import { Grow } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import projectsData from '../utils/projectsData';
// ===============================================================

// Creating Styled Components
// ===============================================================
const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.main,
}));

const Main = styled('div')({
    marginTop: '1rem',
    marginBottom: '1rem',
});

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    maxHeight: 'auto',
    marginLeft: '1.5rem',
    [theme.breakpoints.up('sm')]: {
        marginRight: '1.5rem',
    },
}));

const StyledMedia = styled(CardMedia)(({ theme }) => ({
    backgroundSize: 'contain',
    width: theme.spacing(40),
    height: theme.spacing(37),
}));
// ===============================================================

// Creating the Portfolio component
// ===============================================================
const Portfolio = () => {

    // Creating a state to hold the projects
    // ===============================================================
    const [projects, /*setProjects*/] = useState(projectsData);

    // Creating a function to add a new project for further development
    // setProjects(prevProjects => [...prevProjects, newProject]);
    // ===============================================================

    // Creating a state to hold the checked value
    // ===============================================================
    const [checked, setChecked] = useState(false);
    const GROW_TIMEOUT = 1000;
    useEffect(() => {
        setChecked(true);
    }, []);
    // ===============================================================

    // Returning the JSX
    // ===============================================================
    return (
        <Root>
            <Main>
                <Typography variant="h3" sx={{ textAlign: 'center', color:'#457b9d'}} gutterBottom>
                    Projects
                </Typography>
                <Grid container alignItems={'stretch'} spacing={2}>
                    {projects.map((project) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={project.name}>
                            <Grow
                                in={checked}
                                {...(checked ? { timeout: GROW_TIMEOUT } : {})}
                            >
                                <StyledCard>
                                    <StyledMedia
                                        image={project.image}
                                        title={project.name}
                                        alt={project.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            href={project.deployed}
                                            target="_blank"
                                        >
                                            Deployed
                                        </Button>
                                        <Button size="small" href={project.github} target="_blank">
                                            GitHub
                                        </Button>
                                    </CardActions>
                                </StyledCard>
                            </Grow>
                        </Grid>
                    ))};
                </Grid>
            </Main>
        </Root>
    );
};
// ===============================================================

// Exporting the Portfolio component
// ===============================================================
export default Portfolio;
// ===============================================================