// Desc: This is the Copyright component
// for this file I used the following Github repo:
// (https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)
// ============================================================

// Importing modules
// ============================================================
// import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// ============================================================

// Creating the component
// ============================================================
const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                EhsanAsh
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
};
// ============================================================

// Exporting the component
// ============================================================
export default Copyright;
// ============================================================
