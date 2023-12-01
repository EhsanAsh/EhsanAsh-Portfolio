// Desc: This file contains the code for the list component which will be used in resume page.
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
    Grow
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(227, 233, 240, 0.3)',
    marginTop: '1rem',
});

const StyledListItem = styled(ListItem)({
    '&&:hover': {
        backgroundColor: 'transparent !important',
    },
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
        <StyledList>
            <div>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>{frontEnd.title}</Typography>
            </div>
            <Divider />
            {/* mapping  through frontEnd items which each item has three properties: name, icon, and color */}
            {frontEnd.items.map((item) => (
                <Grow in={true} timeout={1000} key={item.name}>
                    <StyledListItem>
                        <ListItemAvatar>
                            <StyledAvatar sx={{ bgcolor: item.color }}>
                                <FontAwesomeIcon icon={item.icon} />
                            </StyledAvatar>
                        </ListItemAvatar>
                        <StyledListItemText primary={item.name} />
                    </StyledListItem>
                </Grow>
            ))}
            <Divider />
            <Typography variant="h6" sx={{ textAlign: 'center' }}>{backEnd.title}</Typography>
            <Divider />
            {/* mapping  through backEnd items which each item has three properties: name, icon, and color */}
            {backEnd.items.map((item) => (
                <Grow in={true} timeout={1000} key={item.name}>
                    <StyledListItem>
                        <ListItemAvatar>
                            <StyledAvatar sx={{ bgcolor: item.color }}>
                                <FontAwesomeIcon icon={item.icon} />
                            </StyledAvatar>
                        </ListItemAvatar>
                        <StyledListItemText primary={item.name} />
                    </StyledListItem>
                </Grow>
            ))}
        </StyledList>
    );
};
// =========================================================

// Exporting the List component
// =========================================================
export default ListComponent;
// =========================================================