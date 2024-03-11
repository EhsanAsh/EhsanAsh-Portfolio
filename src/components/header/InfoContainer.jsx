// Desc: This file exports the InfoContainer component
// to be used in the Header component
// Used the following as a reference:
// https://chakra-ui.com/docs/components/container
// ============================================================

// Importing modules
// ============================================================
import { Box, Container, Text } from '@chakra-ui/react';
// ============================================================

// Define the InfoContainer component
// ============================================================
const InfoContainer = () => {

    return (

        <Container variant={'hero'} lineHeight={'2'} gap={0}>

            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ base: 'center', md: 'flex-start' }}
                gap={'0'}
                lineHeight={'1.2'}
            >
                <Text as={'h2'}>Ehsan Ashrafipour</Text>
                <Text
                    as={'h3'}
                    fontSize={['lg', 'xl', 'xl', 'xl', '2xl']}
                    fontWeight={'500'}
                >
                            BEng Mechanical Engineering
                </Text>
            </Box>

            <div className='wrapper'>
                <svg>
                    <text
                        x="50%"
                        y="45%"
                        textAnchor="middle"
                    >
                                Full-stack Application Developer
                    </text>
                </svg>
            </div>

        </Container>

    );

};
// ============================================================

// Export the InfoContainer component
// ============================================================
export default InfoContainer;
// ============================================================