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
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            flex: '1',
            Height:'100vh',
            width: '100vw',
            color: 'brand.darkBlue',
            bg: 'brand.white',
            fontFamily: 'robotoLight',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: ['16px', '18px'],
            gap: '7px',
            // overflow: 'scroll',
        },

        '.page': {
            flex: '1 0 auto',
            overflow: 'auto',
        },
    },
};
// ============================================================

// Export Overrides
// ============================================================
export default styles;
// ============================================================