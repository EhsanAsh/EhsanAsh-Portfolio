// Desc: This is the Projects page of the website where the user
// can view the projects I have worked on.
// ===============================================================

// Importing packages and components
// ===============================================================
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Grid } from '@chakra-ui/react';
import ProjectCard from '../components/projectCard';
import projectsData from '../utils/projectsData';
// ===============================================================

// Creating the Projects component
// ===============================================================
const Projects = () => {

    // GSAP animations to fade in the projects
    const gridRef = useRef(null);

    // Animate the projects when the component mounts
    useEffect(() => {
        // Target all GridItems within the grid container
        gsap.fromTo(
            gridRef.current.children,
            { autoAlpha: 0, y: 30 },
            {
                autoAlpha: 1,
                y: 0,
                // Stagger the animation of each GridItem
                stagger: 0.5,
                ease: 'Power3.easeOut',
                duration: 3,
            }
        );
    }, []);

    return (

        <Grid
            ref={gridRef}
            templateRows={{
                base: 'repeat(6, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(2, 1fr)'
            }}
            templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                xl: 'repeat(3, 1fr)'
            }}
            gap={5}
            p={10}
            mb={10}
            justifyContent='center'
            justifyItems='center'
            alignItems='stretch'
        >
            {projectsData.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </Grid>

    );
};
// ===============================================================

// Exporting the Projects component
// ===============================================================
export default Projects;
// ===============================================================