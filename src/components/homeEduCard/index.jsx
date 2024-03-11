// Desc: This file exports the HomeEduCard component
// to be used in the Home page
// Used followings as a reference:
// https://chakra-ui.com/docs/components/card
// https://chakra-ui.com/docs/components/list
// ============================================================

// Importing modules
// ============================================================
import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
// ============================================================

// Define HomeEduCard function
// ============================================================
const HomeEduCard = ({ educationData }) => {

    return (

        <>
            {educationData.map((item, index) => (

                <Card key={index} size='lg' variant={'gsap'}>

                    <CardHeader>
                        <Heading
                            as="h3"
                            fontSize='lg'
                            fontFamily={'josefinSlabTitle'}
                            transform={'translateY(-10px)'}
                        >
                            {item.title}
                        </Heading>
                    </CardHeader>

                    <CardBody py={2}>

                        <List spacing={3} lineHeight='tall'>
                            {item.details.map((detail, detailIndex) => (
                                <ListItem key={detailIndex}>
                                    <ListIcon as={detail.icon} color='brand.orange' />
                                    {detail.text}
                                    {detail.link && (
                                        <ChakraLink
                                            as={ReactRouterLink}
                                            to={detail.link}
                                            isExternal
                                            color='brand.error'
                                        >
                                            {detail.textProject}<ExternalLinkIcon mx='2px' />
                                        </ChakraLink>
                                    )}
                                </ListItem>
                            ))}
                        </List>

                    </CardBody>

                </Card>

            ))}
        </>

    );

};
// ============================================================

// Export HomeEduCard
// ============================================================
export default HomeEduCard;
// ============================================================