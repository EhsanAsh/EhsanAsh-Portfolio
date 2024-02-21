// Desc: Thi is the Error page component which will be displayed
// when the user navigates to a non - existent page or when an error occurs.
// used (https://mui.com/material-ui/react-typography/) as reference.
// ============================================================

// Importing modules
// ============================================================
import { Link } from 'react-router-dom';
// ============================================================

// Creating the Error component
// ============================================================

const Error = ({ message }) => {
    return (
        <div>
            <div>
                <h3>Error</h3>
                <p>{message}</p>
                <p>
                    <Link to="/">Return to the homepage</Link>
                </p>
            </div>
        </div>
    );
};
// ============================================================

// Exporting the Error component
// ============================================================
export default Error;
// ============================================================