// Desc: This is the Portfolio page of the website where the user
// can view the projects I have worked on.there will be six projects
// all with a description, a link to the deployed application, and a
// link to the GitHub repository and a picture of that project which
// will be clickable.all cards should animated when the page loads
// using material ui framework.also useState and useEffect hooks will
// be used to set the state of the projects and to render them to the page.
// ===============================================================

// Importing all necessary packages
// ===============================================================
import { useState, useEffect } from 'react';
import projectsData from '../utils/projectsData';
// ===============================================================

// Creating the Portfolio component
// ===============================================================
const Portfolio = () => {

    // Creating a state to hold the projects
    // ===============================================================
    const [projects, /*setProjects*/] = useState(projectsData);

    // Creating a function to add a new project for further development
    // setProjects(prevProjects => [...prevProjects, newProject]);
    // ===============================================================

    // Returning the JSX
    // ===============================================================
    return (
        <div>
            <div>
                <p> Projects</p>

                <div>
                    {projects.map((project) => (
                        <div key={project.name}>
                            <div>
                                <div>
                                    <p>{project.name}</p>
                                    <p>{project.description}</p>
                                </div>
                                <div>
                                    <button
                                        href={project.deployed}
                                    >
                                            Deployed
                                    </button>
                                    <button href={project.github}>
                                            GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </div>
    );
};
// ===============================================================

// Exporting the Portfolio component
// ===============================================================
export default Portfolio;
// ===============================================================