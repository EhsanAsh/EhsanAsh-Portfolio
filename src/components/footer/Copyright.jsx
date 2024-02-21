// Desc: This is the Copyright component
// for this file I used the following Github repo:
// (https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)
// ============================================================

// Importing modules
// ============================================================
// ============================================================

// Creating the component
// ============================================================
const Copyright = () => {
    return (
        <span>
            {'Copyright © '}
            <a href="/">
                EhsanAsh
            </a>{' '}
            {new Date().getFullYear()}.
        </span>
    );
};
// ============================================================

// Exporting the component
// ============================================================
export default Copyright;
// ============================================================
