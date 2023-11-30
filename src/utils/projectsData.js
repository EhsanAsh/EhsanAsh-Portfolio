// Desc: This file contains the data for the projects page
// ==========================================================

// Importing images
// ===============================================================
import JATE from '../assets/image/JATE.jpg';
import TravIS from '../assets/image/TravIS.jpg';
import TNG from '../assets/image/TNG.jpg';
import NoteTaker from '../assets/image/NoteTaker.jpg';
import WDS from '../assets/image/WDS.jpg';
import CodeQuiz from '../assets/image/CodeQuiz.jpg';
// ===============================================================

// Creating an array of objects to hold the data for each project
// ==========================================================
const projectsData = [
    {
        id: 1,
        name: 'JATE',
        description:
            'A browser-based text editor designed to function as a Progressive Web Application (PWA).',
        image: JATE,
        deployed: 'https://jate-b00o.onrender.com/',
        github: 'https://github.com/EhsanAsh/JATE',
    },

    {
        id: 2,
        name: 'TravIS',
        description:
            'TravIS is a web-based application designed to simplify travel itinerary management for frequent travelers.',
        image: TravIS,
        deployed: 'https://uoftgroup3.github.io/toronto-newcomers-guide/',
        github: 'https://github.com/EhsanAsh/TravIs',
    },

    {
        id: 3,
        name: 'TNG',
        description:
            'Welcome to the Toronto Newcomers\' Guide! This platform is crafted specifically for newcomers to the Greater Toronto Area (GTA). The guide aims to provide you with valuable information to ease your transition and adaptation to your new environment.',
        image: TNG,
        deployed: 'https://ehsan-burger-logger.herokuapp.com/',
        github: 'https://github.com/EhsanAsh/toronto-newcomers-guide',
    },

    {
        id: 4,
        name: 'Note Taker',
        description:
            'Note Taker is a web-based application designed for small business owners who want an efficient way to keep track of tasks and organize their thoughts.',
        image: NoteTaker,
        deployed: 'https://note-taker-092223-57aac5baa4f0.herokuapp.com/',
        github: 'https://github.com/EhsanAsh/note-taker',
    },

    {
        id: 5,
        name: 'Work Day Scheduler',
        description:
            'This workday scheduler is designed specifically for busy employees. Recognizing the importance of effective time management in today\'s fast-paced work environment, this tool allows users to seamlessly add essential events to a daily planner. ',
        image: WDS,
        deployed: 'https://ehsanash.github.io/work-day-scheduler/',
        github: 'https://github.com/EhsanAsh/work-day-scheduler',
    },

    {
        id: 6,
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