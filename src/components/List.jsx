// Desc: This file contains the code for the list component which will be used in resume page.
// =========================================================

// Import react and material UI components and styling packages
// =========================================================
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { Avatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Divider } from '@mui/material';
import { Grow } from '@mui/material';
// =========================================================

// importing the list items
// =========================================================
import { frontEnd, backEnd } from '../utils/listData';

// Creating Styled Components
// =========================================================
const StyledList = styled(List)({
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
});

const StyledListItem = styled(ListItem)({
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
}));

const StyledListItemText = styled(ListItemText)({
    '& span': {
        fontSize: '1.2rem',
    },
});
// =========================================================

// Creating the List component
// =========================================================
const ListComponent = () => {
    return (
        <StyledList>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>{frontEnd.title}</Typography>
            <Divider />
            {/* mapping  through frontEnd items which each item has three properties: name, icon, and color */}
            {frontEnd.items.map((item, index) => (
                <Grow in={true} timeout={1000} key={index}>
                    <StyledListItem>
                        <ListItemAvatar>
                            <StyledAvatar sx={{ bgcolor: item.color }}>
                                {item.icon}
                            </StyledAvatar>
                        </ListItemAvatar>
                        <StyledListItemText primary={item.name} />
                    </StyledListItem>
                </Grow>
            ))}
            <Divider />
            <Typography variant="h5" sx={{ textAlign: 'center' }}>{backEnd.title}</Typography>
            <Divider />
            {/* mapping  through backEnd items which each item has three properties: name, icon, and color */}
            {backEnd.items.map((item, index) => (
                <Grow in={true} timeout={1000} key={index}>
                    <StyledListItem>
                        <ListItemAvatar>
                            <StyledAvatar sx={{ bgcolor: item.color }}>
                                {item.icon}
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