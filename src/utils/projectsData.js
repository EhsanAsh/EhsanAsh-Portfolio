// Desc: This file contains the data for the projects page
// ==========================================================

// Importing images
// ===============================================================
import JATE from '../assets/image/JATE.jpg';
import TravIS from '../assets/image/TravIS.jpg';
import TNG from '../assets/image/TNG.jpg';
import AdsTrees from '../assets/image/AdsTrees.jpg';
import WDS from '../assets/image/WDS.jpg';
import CodeQuiz from '../assets/image/CodeQuiz.jpg';
import Movie from '../assets/image/Movie.jpg';
import SocialNetwork from '../assets/image/SocialNetwork.jpg';
import ECommerce from '../assets/image/E-Commerce.jpg';
// ===============================================================

// Creating an array of objects to hold the data for each project
// ==========================================================
const projectsData = [
	{
		id: 1,
		name: 'AdsTrees',
		description:
			'AdsTrees is a revolutionary web application that intertwines the power of advertising with environmental sustainability. It offers a unique platform where viewers can watch premium ads voluntarily, and in return, trees are planted, contributing to a greener planet.',
		image: AdsTrees,
		deployed: 'https://adstrees.com/',
		github: 'https://github.com/EhsanAsh/AdsTrees',
	},

	{
		id: 2,
		name: 'Movie Fight',
		description:
			'In this project I tried to create a Movie Search application, using OMDb API and Axios library, with pure JavaScript and without using any front-end frameworks like React. Users can search for two different movies, check, and compare the returned information.',
		image: Movie,
		deployed: 'https://ehsanash.github.io/movie-search/',
		github: 'https://github.com/EhsanAsh/movie-search',
	},

	{
		id: 3,
		name: 'TravIS',
		description:
			'TravIs is a web-based application designed to simplify travel itinerary management for frequent travelers. This application provides users with the ability to effortlessly create and manage their trip itineraries, ensuring efficient travel planning and organization.',
		image: TravIS,
		deployed: 'https://travis231017-9762a24c277b.herokuapp.com/',
		github: 'https://github.com/EhsanAsh/TravIs',
	},

	{
		id: 4,
		name: 'TNG',
		description:
			"Welcome to the Toronto Newcomers' Guide! This platform is crafted specifically for newcomers to the Greater Toronto Area (GTA). The guide aims to provide you with valuable information to ease your transition and adaptation to your new environment.",
		image: TNG,
		deployed: 'https://uoftgroup3.github.io/toronto-newcomers-guide/',
		github: 'https://github.com/EhsanAsh/toronto-newcomers-guide',
	},

	{
		id: 5,
		name: 'JATE',
		description:
			'This project is a browser-based text editor designed to function as a Progressive Web Application (PWA). It allows developers to create and manage notes or code snippets, with or without an internet connection.',
		image: JATE,
		deployed: 'https://jate-b00o.onrender.com/',
		github: 'https://github.com/EhsanAsh/JATE',
	},

	{
		id: 6,
		name: 'Social Network API',
		description:
			'This project is a backend API for a social media startup, designed to handle large amounts of unstructured data using a NoSQL database. It leverages Node.js, Express.js, and Mongoose to provide a robust and scalable solution.',
		image: SocialNetwork,
		github: 'https://github.com/EhsanAsh/social-network-api',
	},

	{
		id: 7,
		name: 'E-Commerce Backend',
		description:
			'The E-commerce Backend Application is a Node.js based application designed for internet retail company managers who wish to have a powerful back end for their e-commerce website with the latest technologies.',
		image: ECommerce,
		github: 'https://github.com/EhsanAsh/e-commerce-backend',
	},

	{
		id: 8,
		name: 'Work Day Scheduler',
		description:
			"This workday scheduler is designed specifically for busy employees. Recognizing the importance of effective time management in today's fast-paced work environment, this tool allows users to seamlessly add essential events to a daily planner. ",
		image: WDS,
		deployed: 'https://ehsanash.github.io/work-day-scheduler/',
		github: 'https://github.com/EhsanAsh/work-day-scheduler',
	},

	{
		id: 9,
		name: 'Code quiz',
		description:
			'This application is designed to test your coding knowledge with a set of 8 different questions. With a time limit set to 80 seconds, it creates a challenging and engaging environment to demonstrate your skills and see how quickly you can answer the questions.',
		image: CodeQuiz,
		deployed: 'https://ehsanash.github.io/code-quiz/',
		github: 'https://github.com/EhsanAsh/code-quiz',
	},
];
// ==========================================================

// Exporting the array of objects
// ==========================================================
export default projectsData;
// ==========================================================
