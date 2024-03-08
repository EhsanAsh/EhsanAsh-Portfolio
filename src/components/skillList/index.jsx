// Desc: This file contains the code for the list
//  component which will be used in Portfolio page.
// Used the following as a reference:
// https://fontawesome.com/docs/web/use-with/react/add-icons
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
    Box,
    Center,
    List,
    ListItem,
} from '@chakra-ui/react';
// =========================================================

// importing the list items
// =========================================================
import { language, frameworks, database, additional} from '../../utils/listData';
// =========================================================

// Creating the List component
// =========================================================
const SkillList = () => {

    return (

        <Box mt={6} p={10}>
            <TableContainer
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                w={'100%'}
                maxW={'300px'}
                minW={'300px'}
            >
                <Table
                    variant='simple'
                    colorScheme='whiteAlpha'
                    size={'sm'}
                    borderBottom={'2px solid'}
                    borderColor={'brand.orange'}
                    mb={4}
                >
                    <Thead
                        borderBottom={'2px solid'}
                        borderColor={'brand.orange'}
                        bg={'brand.grayHeaders'}
                    >
                        <Tr>
                            <Th
                                color={'brand.darkBlue'}
                                textAlign={'center'}
                                fontFamily={'josefinSlabTitle'}
                                fontSize={'sm'}
                            >
                                {language.title}
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <List>
                                    {language.items.map((item, index) => (
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
                </Table>
                <Table
                    variant="simple"
                    colorScheme="orange"
                    alignSelf={'stretch'}
                    maxH={'100px'}
                    size={'sm'}
                >
                    <Thead>
                        <Tr>
                            <Th>{database.title}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <List>
                                    {database.items.map((item, index) => (
                                        <ListItem key={index} maxW={'55px'} p={1} fontSize={'xs'}>
                                            <FontAwesomeIcon icon={item.icon} />
                                            {item.name}
                                        </ListItem>
                                    ))}
                                </List>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table
                    variant="simple"
                    colorScheme="teal"
                    size={'sm'}
                >
                    <Thead>
                        <Tr>
                            <Th>{additional.title}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <List>
                                    {additional.items.map((item, index) => (
                                        <ListItem key={index} maxW={'55px'} p={1} fontSize={'xs'}>
                                            <FontAwesomeIcon icon={item.icon} />
                                            {item.name}
                                        </ListItem>
                                    ))}
                                </List>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table
                    variant="simple"
                    colorScheme="teal"
                    maxH={'100px'}
                    size={'sm'}
                >
                    <Thead>
                        <Tr>
                            <Th>{frameworks.title}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <List>
                                    {frameworks.items.map((item, index) => (
                                        <ListItem key={index} maxW={'55px'} p={1} fontSize={'xs'}>
                                            <FontAwesomeIcon icon={item.icon} />
                                            {item.name}
                                        </ListItem>
                                    ))}
                                </List>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>

    );

};
// =========================================================

// Exporting the List component
// =========================================================
export default SkillList;
// =========================================================