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
	// faPython,
} from '@fortawesome/free-brands-svg-icons';
import {
	faCode,
	faServer,
	faDatabase,
} from '@fortawesome/free-solid-svg-icons';
// =================================================================

// Defining the data
// =================================================================
const language = [
	{
		title: 'Languages',
		items: [
			{
				name: 'JavaScript',
				icon: faJs,
			},
			{
				name: 'Node.js',
				icon: faNodeJs,
			},
		],
	},
];

const frontend = [
	{
		title: 'Frontend Frameworks/Libraries',
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
				name: 'React.js',
				icon: faReact,
			},
			{
				name: 'Redux',
				icon: faCode,
			},
			{
				name: 'React Router',
				icon: faReact,
			},
			{
				name: 'React Bootstrap',
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
				name: 'Apollo Client',
				icon: faCode,
			},
			{
				name: 'Vite',
				icon: faCode,
			},
			{
				name: 'jQuery',
				icon: faJs,
			},
			{
				name: 'Axios',
				icon: faCode,
			},
		],
	},
];

const backend = [
	{
		title: 'Backend Frameworks/Libraries',
		items: [
			{
				name: 'Express.js',
				icon: faServer,
			},
			{
				name: 'MySQL',
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
				name: 'dotenv',
				icon: faDatabase,
			},
			{
				name: 'Apollo Server',
				icon: faServer,
			},
		],
	},
];

const deploy = [
	{
		title: 'Deployment',
		items: [
			{
				name: 'Render',
				icon: faServer,
			},
			{
				name: 'Netlify',
				icon: faServer,
			},
			{
				name: 'Heroku',
				icon: faServer,
			},
		],
	},
];

const architecture = [
	{
		title: 'Architecture',
		items: [
			{
				name: 'MVC architecture',
				icon: faDatabase,
			},
			{
				name: 'PWA Development',
				icon: faCode,
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
				name: 'SPA',
				icon: faCode,
			},
		],
	},
];

const additional = [
	{
		title: 'Additional Skills',
		items: [
			{
				name: 'Git Version Control',
				icon: faCode,
			},
			{
				name: 'Stripe Payment Gateway',
				icon: faServer,
			},
			{
				name: 'GraphQL',
				icon: faServer,
			},
			{
				name: 'Agile Development',
				icon: faCode,
			},
			{
				name: 'JWT',
				icon: faCode,
			},
			{
				name: 'Dom Manipulation',
				icon: faCode,
			},
			{
				name: 'Jest',
				icon: faCode,
			},
		],
	},
];
// =================================================================

// Exporting the data
// =================================================================
export { language, frontend, backend, deploy, architecture, additional };
// =================================================================
