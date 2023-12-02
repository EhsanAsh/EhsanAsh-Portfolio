// Desc: This file contains the code for the list component which will be used in resume page.
// to create the list component I used the following resources:
// https://mui.com/material-ui/react-list/
// =========================================================

// Import react and material UI components and styling packages
// =========================================================
import { styled } from '@mui/system';
import {
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    Grow,
    ListSubheader
}
    from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// =========================================================

// importing the list items
// =========================================================
import { frontEnd, backEnd } from '../../utils/listData';

// Creating Styled Components
// =========================================================
const StyledList = styled(List)({
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 500,
    '& ul': { padding: 0 },
    backgroundColor: 'rgba(227, 233, 240, 0.2)',
    margin: '3rem',
});

const StyledListItem = styled(ListItem)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(6),
    height: theme.spacing(6),
}));

const StyledListItemText = styled(ListItemText)({
    '& span': {
        fontSize: '.8rem',
        marginLeft: '.2rem',
    },
});
// =========================================================

// Creating the List component
// =========================================================
const ListComponent = () => {
    return (
        <StyledList subheader={<li />}>
            {[0].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                    <ul>
                        <ListSubheader>
                            <Typography variant="h6" sx={{ textAlign: 'center' }}>{frontEnd.title}</Typography>
                            <Divider />
                        </ListSubheader>
                        {/* mapping  through frontEnd items which each item has three properties: name, icon, and color */}
                        {[0].map((row) => (
                            <StyledListItem key={`row-${sectionId}-${row}`}>
                                {frontEnd.items.map((item) => (
                                    <Grow in={true} timeout={1000} key={item.name}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <StyledAvatar sx={{ bgcolor: item.color }}>
                                                    <FontAwesomeIcon icon={item.icon} />
                                                </StyledAvatar>
                                            </ListItemAvatar>
                                            <StyledListItemText primary={item.name} />
                                        </ListItem>
                                    </Grow>
                                ))}
                            </StyledListItem>
                        ))}
                        <ListSubheader>
                            <Divider />
                            <Typography variant="h6" sx={{ textAlign: 'center' }}>{backEnd.title}</Typography>
                            <Divider />
                        </ListSubheader>
                        {/* mapping  through backEnd items which each item has three properties: name, icon, and color */}
                        {[0].map((row) => (
                            <StyledListItem key={`row-${sectionId}-${row}`}>
                                {backEnd.items.map((item) => (
                                    <Grow in={true} timeout={1000} key={item.name}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <StyledAvatar sx={{ bgcolor: item.color }}>
                                                    <FontAwesomeIcon icon={item.icon} />
                                                </StyledAvatar>
                                            </ListItemAvatar>
                                            <StyledListItemText primary={item.name} />
                                        </ListItem>
                                    </Grow>
                                ))}
                            </StyledListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </StyledList>
    );
};
// =========================================================

// Exporting the List component
// =========================================================
export default ListComponent;
// =========================================================