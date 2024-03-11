// Desc: This file contains the code for the list
//  component which will be used in Portfolio page.
// Used followings as a reference:
// https://fontawesome.com/docs/web/use-with/react/add-icons
// https://chakra-ui.com/docs/components/accordion
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
                <AccordionItem
                    p={2}
                    borderBottom={'2px, solid'}
                    borderColor={'#afb9bda4'}
                >
                    <Heading>
                        <AccordionButton>
                            <Box
                                as="span"
                                flex='1'
                                textAlign='left'
                                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                                color={'brand.darkBlue'}
                                fontFamily={'josefinSlabTitle'}
                                fontWeight={'600'}
                            >
                                {title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel>
                        {skills[0].items.map((item, index) => (
                            <Box
                                display={'flex'}
                                justifyContent={'flex-start'}
                                alignItems={'center'}
                                gap={0}
                                key={index}
                            >
                                <Box
                                    w={'100%'}
                                    maxW={'55px'}
                                    fontSize={'xs'}
                                    color={'brand.darkBlue'}
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                </Box>
                                <Box
                                    fontSize={{ base: 'xs', md: 'sm' }}
                                    color={'brand.darkBlue'}
                                    fontWeight={'500'}
                                >
                                    {item.name}
                                </Box>
                            </Box>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            </>
        );
    };

    return (

        <Card size={'sm'} variant={'skills'}>
            <Accordion w={'100%'} p={4}>
                <Heading
                    textAlign='center'
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    color={'brand.error'}
                    fontFamily={'josefinSlabTitle'}
                    fontWeight={'700'}
                    pb={4}
                >
                    Skills Overview
                </Heading>
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