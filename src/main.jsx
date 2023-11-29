//Desc: Entry point of the app
// used the following repo as reference for the CssBaseline:
// (https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)
// ============================================================

// TODO: Check the index.css Delete if not needed
// TODO: Add Style

// Importing libraries
// ============================================================
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// ============================================================

// Importing pages and components
// ============================================================
import App from './App.jsx';
import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';
// import Portfolio from './pages/Portfolio.jsx';
// import Resume from './pages/Resume.jsx';
import Error from './pages/Error.jsx';
// ============================================================

// Importing fontsource
// ============================================================
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// ============================================================

// Creating routes
// ============================================================
const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error message='Sorry, an unexpected error has occurred.' />,
        children: [
            {
                index: true,
                element: <About />,
            },
            // {
            //     path: '/portfolio',
            //     element: <Portfolio />,
            // },
            // {
            //     path: '/resume',
            //     element: <Resume />,
            // },
            // {
            //     path: '/contact',
            //     element: <Contact />,
            // },
            {
                path: '*',
                element: <Error message='Sorry, the page you requested could not be found.' />,
            },
        ],
    }
];

const router = createBrowserRouter(routes);
// ============================================================

// Selecting the root element
// ============================================================
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// ============================================================

// Rendering the app
// ============================================================
root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>,
);
// ============================================================
