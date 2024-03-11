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
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Projects from './pages/Projects.jsx';
import Home from './pages/Home.jsx';
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
                element: <Home />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/projects',
                element: <Projects />,
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
