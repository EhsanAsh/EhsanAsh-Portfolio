// Dec: This file exports cardData and
// education data for the home page.
// Used following as a reference:
// https://chakra-ui.com/docs/components/icon
// =====================================================

// Import packages
// =====================================================
import {
    InfoOutlineIcon,
    DragHandleIcon,
    TimeIcon,
    StarIcon,
    SettingsIcon,
    CheckIcon,
} from '@chakra-ui/icons';
// =====================================================

// Define card data for the home page
// ======================================================
const cardData = [
    {
        id: 0,
        title: 'WELCOME TO MY REACT PORTFOLIO!',
        content: [
            'This single-page application portfolio is designed for employers like you who are looking for candidates with experience building single-page applications. You can use this portfolio to view my work samples and assess whether I am a good fit for your open position.',
            'Click the button below to proceed to the Portfolio page.'
        ],
        link: '/portfolio',
        linkText: 'Portfolio'
    },
    {
        id: 1,
        title: 'PROJECTS',
        content: [
            'AdsTrees, a revolutionary web application that intertwines the power of advertising with environmental sustainability. It offers a unique platform where viewers can watch premium ads voluntarily, and in return, trees are planted, contributing to a greener planet...',
            'Click the button below to proceed to the Projects page.'
        ],
        link: '/projects',
        linkText: 'Projects'
    },
    {
        id: 2,
        title: 'WHY HIRE ME!',
        content: [
            'I\'m a Full-Stack Developer and the University of Toronto Alumnus with a Certificate in Full-stack Application Development, boasting a remarkable graduation score of 96.07 (A). With a lifelong passion for programming and software development, I bring a blend of creativity, problem-solving skills, and a commitment to creating impactful solutions.',
            'Click on buttons below to proceed to my LinkedIn or GitHub profile.'
        ],
        linkId2: 'https://www.linkedin.com/in/ehsan-ashrafipour-922056245/',
        linkTextId2: 'linkedin',
        secondaryLink: 'https://github.com/EhsanAsh',
        secondaryLinkText: 'github'
    }
];
// ======================================================

// Define the data for each Education card
// ======================================================
const educationData = [
    {
        title: 'University of Toronto Certificate',
        details: [
            { icon: InfoOutlineIcon, text: 'Full Stack Application Development' },
            { icon: DragHandleIcon, text: 'University of Toronto, Toronto, Ontario' },
            { icon: TimeIcon, text: 'July 2023 - January 2024' },
            { icon: StarIcon, text: '96.07 / 100 (A)' },
            { icon: CheckIcon, text: 'HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB, MySQL, and more...' },
            { icon: SettingsIcon, textProject: 'Final Project | AdsTrees', link: 'https://www.adstrees.com/' },
        ],
    },
    {
        title: 'Bachelor\'s Degree',
        details: [
            { icon: InfoOutlineIcon, text: 'BEng Auto Mechanical Engineering' },
            { icon: DragHandleIcon, text: 'Azad University, Fars, Iran' },
            { icon: TimeIcon, text: 'January 2009 - February 2011' },
            { icon: StarIcon, text: '18.15 / 20 (A)' },
            { icon: CheckIcon, text: 'Graduated with Honours' },
        ],
    },
    {
        title: 'Associate\'s Degree',
        details: [
            { icon: InfoOutlineIcon, text: 'Associate Degree in Automotive Maintenance Technology' },
            { icon: DragHandleIcon, text: 'Shiraz University, Shiraz, Iran' },
            { icon: TimeIcon, text: 'September 2004 - February 2007' },
            { icon: StarIcon, text: '18 / 20 (A)' },
            { icon: CheckIcon, text: 'Graduated with Honours' },
        ],
    },
];
// ======================================================

// Export cardData and educationData
// ======================================================
export { cardData, educationData };
// ======================================================