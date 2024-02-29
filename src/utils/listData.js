// Desc: This file exports title and item data for the list component. There are two titles: Front - end Proficiency and Back - end Proficiency.
// =================================================================

// Importing packages
// =================================================================
// import {
//     faHtml5,
//     faCss3Alt,
//     faJsSquare,
//     faBootstrap,
//     faReact,
//     faNodeJs
// }
//     from '@fortawesome/free-brands-svg-icons';
// import {
//     faCode,
//     faMobileAlt,
//     faServer,
//     faDatabase
// }
//     from '@fortawesome/free-solid-svg-icons';
// =================================================================

// Defining the data
// =================================================================
const frontEnd = {
    title: 'Front-end Proficiencies',
    items: [
        {
            name: 'HTML',
            // icon: faHtml5,
            color: '#e34f26',
        },
        {
            name: 'CSS',
            // icon: faCss3Alt,
            color: '#264de4',
        },
        {
            name: 'JavaScript',
            // icon: faJsSquare,
            color: '#f7df1e',
        },
        {
            name: 'jQuery',
            // icon: faCode,
            color: '#0769ad',
        },
        {
            name: 'Bootstrap',
            // icon: faBootstrap,
            color: '#563d7c',
        },
        {
            name: 'Material UI',
            // icon: faReact,
            color: '#0081CB',
        },
        {
            name: 'Responsive Design',
            // icon: faMobileAlt,
            color: '#000000',
        },
        {
            name: 'PWA',
            // icon: faMobileAlt,
            color: '#000000',
        },
        {
            name: 'React',
            // icon: faReact,
            color: '#61DBFB',
        },
        {
            name: 'Redux',
            // icon: faReact,
            color: '#764abc',
        },
    ],
};

const backEnd = {
    title: 'Back-end Proficiencies',
    items: [
        {
            name: 'Node.js',
            // icon: faNodeJs,
            color: '#68a063',
        },
        {
            name: 'Express',
            // icon: faServer,
            color: '#000000',
        },
        {
            name: 'MongoDB',
            // icon: faDatabase,
            color: '#47a248',
        },
        {
            name: 'MySQL and Sequelize',
            // icon: faDatabase,
            color: '#4479a1',
        },
        {
            name: 'RESTful APIs',
            // icon: faServer,
            color: '#000000',
        },
        {
            name: 'GraphQL',
            // icon: faServer,
            color: '#e535ab',
        },
        {
            name: 'Apollo',
            // icon: faServer,
            color: '#000000',
        },
        {
            name: 'JWT',
            // icon: faServer,
            color: '#000000',
        },
        {
            name: 'MERN Stack',
            // icon: faServer,
            color: '#000000',
        },
    ],
};
// =================================================================

// Exporting the data
// =================================================================
export { frontEnd, backEnd };
// =================================================================