// Desc: Thi is the Error page component which will be displayed
// when the user navigates to a non - existent page or when an error occurs.
// ============================================================

// Importing modules and image
// ============================================================
import { Link, useRouteError } from 'react-router-dom';
import errorPic from '../assets/image/404.png';
// ============================================================

// Creating the Error component
// ============================================================

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div
            id="error-page"
            style={{
                padding: '50px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img
                src={errorPic}
                alt="404"
                style={{ width: '30%', height: 'auto' }}
            />
            <h1 style={{ color: '#9a031e' }}>Oops! Something went wrong.</h1>
            <p>
                We&apos;re sorry for the inconvenience. An unexpected error has occurred.
            </p>
            <p style={{ color: '#9a031e' }}>
                <i>Error Message: Page {error.statusText || error.message}</i>
            </p>
            <button
                style={{ fontWeight: '600', color: '#9AA61A' }}
                onClick={() => window.location.reload()}
            >
                Try Again
            </button>
            <p style={{ fontWeight: '600', color: '#9AA61A' }}>
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