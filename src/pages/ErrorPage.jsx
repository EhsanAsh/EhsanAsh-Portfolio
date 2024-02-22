// Desc: Thi is the Error page component which will be displayed
// when the user navigates to a non - existent page or when an error occurs.
// ============================================================

// Importing modules
// ============================================================
import { Link, useRouteError } from 'react-router-dom';
// ============================================================

// Creating the Error component
// ============================================================

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div id="error-page" style={{ padding: '50px', textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>Oops! Something went wrong.</h1>
            <p style={{ fontSize: '20px' }}>
                We&apos;re sorry for the inconvenience. An unexpected error has occurred.
            </p>
            <p style={{ color: 'gray' }}>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={() => window.location.reload()}>Try Again</button>
            <p style={{ fontSize: '20px' }}>
                <Link to="/">Return to the homepage</Link>
            </p>
        </div>
    );
};
// ============================================================

// Exporting the Error component
// ============================================================
export default ErrorPage;
// ============================================================