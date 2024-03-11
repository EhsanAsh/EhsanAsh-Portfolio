// Desc: This is the Copyright component
// ============================================================

// Creating the component
// ============================================================
const Copyright = () => {
    return (
        <span style={{ fontSize: '16px' }}>
            {'Copyright © '}
            <a href="/" style={{ textDecoration: 'underline' }}>
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
