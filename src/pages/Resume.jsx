// Desc: This file contains the code for the resume page.
// to create a download link for the resume page I used the following resources:
// https://react-pdf.org/advanced.
// https://reactrouter.com/en/6.20.0/components/link.
// =========================================================

// Import List component which is already styled
// =========================================================
import ListComponent from '../components/resume/List';
// =========================================================

// Import react-icons package
// =========================================================
// import { FaDownload } from 'react-icons/fa';
// endIcon={<FaDownload />}
// =========================================================

// Creating the Resume component:
// =========================================================
const Resume = () => {

    const handleClick = () => {
        const publicUrl = `${window.location.protocol}//${window.location.host}`;
        window.open(`${publicUrl}/EhsanAsh-CV.docx`);
    };

    return (

        <div>
            <h3>Resume</h3>

            <button onClick={handleClick}>
                <span>Download Developer Resume</span>
            </button>

            <div>
                <ListComponent />
            </div>
        </div>

    );
};
// =========================================================

// Exporting the Resume component
// =========================================================
export default Resume;
// =========================================================