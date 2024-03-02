// Desc: This file exports the HomeInfoCard component
// to be used in the Home page
// Used followings as a reference:
// https://chakra-ui.com/docs/components/card
// https://chakra-ui.com/docs/components/card/theming
// ============================================================

// Importing modules
// ============================================================
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Button,
    Text
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
// ============================================================

// Define HomeInfoCard function
// ============================================================
const HomeInfoCard = ({ cardData }) => {

    return (

        <>

            <Card>
                <CardHeader>
                    <Heading
                        as="h2"
                        fontSize={{ base: 'md', lg: 'xl', xl: '2xl' }}
                        fontFamily={'josefinSlabTitle'}
                    >
                        {cardData.title}
                    </Heading>
                </CardHeader>
                <CardBody py={3}>
                    {cardData.content.map((paragraph, index) => (
                        <Text key={index}>{paragraph}</Text>
                    ))}
                </CardBody>
                <CardFooter>
                    {(cardData.id === 0 || cardData.id === 1) ? (
                        <Button>
                            <ChakraLink
                                as={ReactRouterLink}
                                to={cardData.link}
                            >
                                {cardData.linkText}
                            </ChakraLink>
                        </Button>
                    ): (
                        <>
                            <Button variant='socialMediaOrange' px={0}>
                                <ChakraLink
                                    as={'a'}
                                    href={cardData.linkId2}
                                    isExternal
                                >
                                    <i className="fa-brands fa-linkedin fa-beat fa-2xl"></i>
                                </ChakraLink>
                            </Button>
                            <Button variant='socialMediaOrange' px={0}>
                                <ChakraLink
                                    as={'a'}
                                    href={cardData.secondaryLink}
                                    isExternal
                                >
                                    <i className="fa-brands fa-github fa-beat fa-2xl"></i>
                                </ChakraLink>
                            </Button>
                        </>
                    )}
                </CardFooter>
            </Card>

        </>

    );

};
// ============================================================

//Export HomeInfoCard component
// ============================================================
export default HomeInfoCard;
// ============================================================