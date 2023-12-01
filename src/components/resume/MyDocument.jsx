// Desc: This file contains the code for MyDocument component which will be used in the resume page inside the PDFDownloadLink component document prop to download the resume in pdf format.
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
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);
// =========================================================

// Exporting the MyDocument component
// =========================================================
export default MyDocument;
// =========================================================