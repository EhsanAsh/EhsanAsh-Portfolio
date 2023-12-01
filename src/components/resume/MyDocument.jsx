// Desc: This file contains the code for MyDocument component which will be used in the resume page inside the PDFDownloadLink component document prop. All styles and configurations are related to the document that will be downloaded as the developer's Resume
// for this file I used the following resources:
// https://react-pdf.org/advanced.
// https://www.npmjs.com/package/@react-pdf/renderer
// =========================================================

// Import react and react-pdf components and styling packages
// =========================================================
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// =========================================================

// Creating Styled Components
// =========================================================
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});
// =========================================================

// Creating the MyDocument component
// =========================================================
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Ehsan Ashrafipour</Text>
            </View>
            <View style={styles.section}>
                <Text>Still working on it</Text>
            </View>
        </Page>
    </Document>
);
// =========================================================

// Exporting the MyDocument component
// =========================================================
export default MyDocument;
// =========================================================