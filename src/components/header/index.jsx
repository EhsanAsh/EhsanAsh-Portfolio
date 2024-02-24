// This file is the header component for the app.
// It is a child component of the App component.
// It contains the navbar component and the header text.
// ============================================================

// Importing modules
// ============================================================
import { Flex, Spacer, Box, Button, Container } from '@chakra-ui/react';
// ============================================================

// Importing images
// ============================================================
import ehsan from '../../assets/image/ehsan.png';
// ============================================================

// Creating the component
// ============================================================

const Header = () => {

    return (

        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box>
                <Button>
                    <a href="/">
                                Home
                    </a>
                </Button>
                <Button>
                    <a href="/portfolio">
                                Portfolio
                    </a>
                </Button>
                <Button>
                    <a href="/projects">
                                Projects
                    </a>
                </Button>
                <Button>
                    <a href="/contact">
                                Contact
                    </a>
                </Button>
                <Button>
                    <a href="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/">
                            LinkedIn
                    </a>
                </Button>
            </Box>
            <Spacer />
            <Box>
                <Container variant={'hero'}>
                    <p>Ehsan Ashrafipour</p>
                    <p>BEng Mechanical Engineering</p>
                    <p>Full-stack Application Developer</p>
                </Container>
            </Box>
        </Flex>

    );

};
// ============================================================

// Exporting the component
// ============================================================
export default Header;
// ============================================================