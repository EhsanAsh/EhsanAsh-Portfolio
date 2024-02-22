//Desc: Entry point of the app
// ============================================================

// Importing libraries
// ============================================================
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// ============================================================

// Importing pages and components
// ============================================================
import App from './App.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import theme from './theme';
// ============================================================

// Creating routes
// ============================================================
const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/resume',
                element: <Resume />,
            },
            {
                path: '/contact',
                element: <Contact />,
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
    <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
    </ChakraProvider>
);
// ============================================================
