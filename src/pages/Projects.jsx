// Desc: This is the Projects page of the website where the user
// can view the projects I have worked on.
// ===============================================================

// Importing packages and components
// ===============================================================
import { Grid } from '@chakra-ui/react';
import ProjectCard from '../components/projectCard';
// ===============================================================

// Creating the Projects component
// ===============================================================
const Projects = () => {

    return (

        <Grid
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
            mb={{ base: 10, md: 0 }}
            justifyContent='center'
            justifyItems='center'
            alignItems='stretch'
        >
            <ProjectCard />
        </Grid>

    );
};
// ===============================================================

// Exporting the Projects component
// ===============================================================
export default Projects;
// ===============================================================