// Desc: This file contains the code for the list
//  component which will be used in Portfolio page.
// Used followings as a reference:
// https://fontawesome.com/docs/web/use-with/react/add-icons
// https://chakra-ui.com/docs/components/table/usage
// https://cssgradient.io/
// =========================================================

// Importing packages
// =========================================================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    List,
    ListItem,
    Card,
    Heading,
    Box
} from '@chakra-ui/react';
// =========================================================

// importing the list items
// =========================================================
import { language, frameworks, database, additional} from '../../utils/listData';
// =========================================================

// Creating the List component
// =========================================================
const SkillList = () => {

    // Defining the renderSkillSection function to render the list
    const renderSkillSection = (title, skills) => {

        if (!Array.isArray(skills)) {
            console.error(`Expected an array for skills, but received: ${typeof skills}`);
            return null;
        }

        return (
            <>
                <AccordionItem>
                    <Heading
                        color={'brand.darkBlue'}
                        textAlign={'center'}
                        fontFamily={'josefinSlabTitle'}
                        fontSize={{ base: 'xs', md: 'sm' }}
                    >
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                {title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel>
                        <List>
                            {skills[0].items.map((item, index) => (
                                <ListItem
                                    display={'flex'}
                                    justifyContent={'flex-start'}
                                    alignItems={'center'}
                                    key={index}
                                    w={'100%'}
                                    // maxW={'80px'}
                                    p={1}
                                    fontSize={'xs'}
                                    fontWeight={'500'}
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                    {item.name}
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </>
        );
    };

    return (

        <Card size={'sm'} variant={'skills'}>
            <Accordion
                // display={'flex'}
                // flexDirection={'column'}
                // justifyContent={'center'}
                // alignItems={'center'}
                // alignSelf={'center'}
                // w={'100%'}
                // maxW={'350px'}
                // minW={'300px'}
                // pb={5}
            >
                {renderSkillSection('Languages and Technologies', language)}
                {renderSkillSection('Frameworks', frameworks)}
                {renderSkillSection('Database Management', database)}
                {renderSkillSection('Additional', additional)}
            </Accordion>
        </Card>

    );

};
// =========================================================

// Exporting the List component
// =========================================================
export default SkillList;
// =========================================================