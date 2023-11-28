//Desc: Entry point of the app
// ============================================================

// Importing libraries and styles
// ============================================================
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// ============================================================
// Importing fontsource
// ============================================================
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// ============================================================

// Rendering the app
// ============================================================
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
);
// ============================================================
