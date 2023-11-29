// Desc: This is the Copyright component
// for this file I used the following Github repo:
// (https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)
// ============================================================
// TODO: Add div and style if needed

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
            <Link color="inherit" href="https://mui.com/">
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
