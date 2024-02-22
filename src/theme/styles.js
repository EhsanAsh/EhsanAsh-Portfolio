// Desc: This file contains the global style overrides
// ============================================================

// Define Overrides
// ============================================================
const styles = {
    global: {

        '*': {
            boxSizing: 'border-box',
        },

        'html, body': {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            color: 'brand.darkGreen',
            bg: 'brand.lightGray',
            fontFamily: 'robotoLight',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: ['16px', '18px'],
            padding: '10px',
        },

        '.page': {
            flex: '1 0 auto',
            overflow: 'auto',
        },

        header: {

        },

        // a: {
        //     textDecoration: 'none',
        // },

    },
};
// ============================================================

// Export Overrides
// ============================================================
export default styles;
// ============================================================