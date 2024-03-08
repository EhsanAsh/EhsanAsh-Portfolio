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
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    List,
    ListItem,
    Card,
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
                <Thead
                    borderBottom={'2px solid'}
                    borderColor={'brand.orange'}
                >
                    <Tr>
                        <Th
                            color={'brand.darkBlue'}
                            textAlign={'center'}
                            fontFamily={'josefinSlabTitle'}
                            fontSize={{ base: 'xs', md: 'sm' }}
                        >
                            {title}
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <List>
                                {skills[0].items.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        maxW={'55px'}
                                        p={1}
                                        fontSize={'xs'}
                                        fontWeight={'500'}
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                        {item.name}
                                    </ListItem>
                                ))}
                            </List>
                        </Td>
                    </Tr>
                </Tbody>
            </>
        );
    };

    return (

        <Card size={'sm'} variant={'skills'}>
            <TableContainer
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                alignSelf={'center'}
                w={'100%'}
                maxW={'350px'}
                minW={'300px'}
                pb={5}
            >
                <Table
                    variant='simple'
                    colorScheme='whiteAlpha'
                    size={{ base: 'xs', sm: 'sm', xl: 'md' }}
                    borderBottom={'2px solid'}
                    borderColor={'brand.orange'}
                >
                    {renderSkillSection('Languages and Technologies', language)}
                    {renderSkillSection('Frameworks', frameworks)}
                    {renderSkillSection('Database Management', database)}
                    {renderSkillSection('Additional', additional)}

                </Table>
            </TableContainer>
        </Card>

    );

};
// =========================================================

// Exporting the List component
// =========================================================
export default SkillList;
// =========================================================