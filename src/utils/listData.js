// Desc: This file exports title and item data for the list component.
// Used the following as a reference:
// https://fontawesome.com/docs/web/use-with/react/add-icons
// =================================================================

// Importing packages
// =================================================================
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faBootstrap,
    faReact,
    faNodeJs,
    faPython,
    faNpm,
    faGitAlt
}from '@fortawesome/free-brands-svg-icons';
import {
    faCode,
    faServer,
    faDatabase,
}from '@fortawesome/free-solid-svg-icons';
// =================================================================

// Defining the data
// =================================================================
const language = {
    title: 'Languages and Technologies',
    items: [
        {
            name: 'HTML5',
            icon: faHtml5,
        },
        {
            name: 'CSS3',
            icon: faCss3Alt,
        },
        {
            name: 'JavaScript',
            icon: faJs,
        },
        {
            name: 'Node.js',
            icon: faNodeJs,
        },
        {
            name: 'GraphQL',
            icon: faServer,
        },
        {
            name: 'JSON',
            icon: faCode,
        },
        {
            name: 'Python',
            icon: faPython,
        },
    ],
};

const frameworks= {
    title: 'Libraries and Frameworks',
    items: [
        {
            name: 'React.js',
            icon: faReact,
        },
        {
            name: 'Express.js',
            icon: faServer,
        },
        {
            name: 'Bootstrap',
            icon: faBootstrap,
        },
        {
            name: 'Chakra UI',
            icon: faCss3Alt,
        },
        {
            name: 'MUI',
            icon: faCss3Alt,
        },
        {
            name: 'Webpack',
            icon: faCode,
        },
        {
            name: 'Apollo',
            icon: faServer,
        },
        {
            name: 'JWT',
            icon: faCode,
        },
        {
            name: 'Work-box',
            icon: faCode,
        },
        {
            name: 'Vite',
            icon: faCode,
        },
        {
            name: 'NPM',
            icon: faNpm,
        },
        {
            name: 'React Router',
            icon: faReact,
        },
        {
            name: 'jQuery',
            icon: faJs,
        },
    ],
};

const database = {
    title: 'Database Management',
    items: [
        {
            name: 'MySQL',
            icon: faDatabase,
        },
        {
            name: 'Sequelize',
            icon: faDatabase,
        },
        {
            name: 'MongoDB',
            icon: faDatabase,
        },
        {
            name: 'Mongoose',
            icon: faDatabase,
        },
        {
            name: 'ORM architecture',
            icon: faDatabase,
        },
        {
            name: 'MVC architecture',
            icon: faDatabase,
        },
    ],
};

const additional = {
    title: 'Additional Skills',
    items: [
        {
            name: 'Git',
            icon: faGitAlt,
        },
        {
            name: 'OOP',
            icon: faCode,
        },
        {
            name: 'RESTful APIs',
            icon: faCode,
        },
        {
            name: 'MERN Stack',
            icon: faCode,
        },
        {
            name: 'Agile Development',
            icon: faCode,
        },
        {
            name: 'PWA Development',
            icon: faCode,
        },
    ],
};
// =================================================================

// Exporting the data
// =================================================================
export { language, frameworks, database, additional };
// =================================================================