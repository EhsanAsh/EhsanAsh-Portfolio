// This file is for the Portfolio page, and it is a functional component. It is a simple page that displays a short description of the website and the developer.
// ============================================================

// Importing React and other important libraries
// ============================================================
import { useEffect } from 'react';
import { useState } from 'react';
// ============================================================

// Import List component which is already styled
// =========================================================
import ListComponent from '../components/resume/List';
// =========================================================

// Import react-icons package
// =========================================================
// import { FaDownload } from 'react-icons/fa';
// endIcon={<FaDownload />}
// =========================================================

// Functional component
// ============================================================
const Portfolio = () => {

    const socialLinks = [
        {
            name: 'Github',
            url: 'https://github.com/EhsanAsh',
            icon:1,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ehsan-ashrafipour-922056245/',
            icon:2 ,
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/EhsanAsh_5123',
            icon:3 ,
        },
    ];

    const handleClick = () => {
        const publicUrl = `${window.location.protocol}//${window.location.host}`;
        window.open(`${publicUrl}/EhsanAsh-CV.docx`);
    };


    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <a href="https://www.linkedin.com/in/ehsan-ashrafipour-922056245/" target="_blank" rel="noreferrer">
                                {/* <StyledMedia
                                        image={ehsan}
                                        title="Click to view my LinkedIn profile"
                                        alt="Author of this website"
                                    /> */}
                            </a>
                            <div>

                                <p>
                                    An innovative and passionate Full-Stack Developer, recently graduated from the University of Toronto with a remarkable graduation score of 96.07 (A). I bring a rich and diverse background, combining over 10 years of experience in sales and marketing in the home and kitchen appliance sector, along with a recent but intensive journey into full-stack development. Known for an indescribable enthusiasm for coding, I am a self-proclaimed hard worker, fast learner, goal-oriented, and a collaborative team member. My career is punctuated by a childhood dream to become a programmer and application developer, a dream that I have pursued with relentless dedication. I thrive in environments that require creativity and problem-solving, always eager to develop innovative solutions that positively impact people&apos;s lives and the environment. My technical proficiency spans across various languages and frameworks, with a particular comfort in MERN stack technologies and a propensity for writing logical codes over styling and designing.
                                </p>
                            </div>
                            <div>
                                {socialLinks.map((link) => (
                                    <div key={link.name}>
                                        <button
                                            onClick={() => window.open(link.url)}
                                        >
                                            <span>{link.icon}</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2>Portfolio</h2>

                            <p>
                                Welcome to my React portfolio! This single-page application portfolio is designed for employers like you who are looking for candidates with experience building single-page applications. You can use this portfolio to view my work samples and assess whether I am a good fit for your open position.
                            </p>
                            <div href={socialLinks[0].url} target="_blank">
                                <button>
                                    <span>GitHub</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Resume</h3>

                        <button onClick={handleClick}>
                            <span>Download Developer Resume</span>
                        </button>

                        <div>
                            <ListComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
// ============================================================

// Exporting the functional component
// ============================================================
export default Portfolio;
// ============================================================

